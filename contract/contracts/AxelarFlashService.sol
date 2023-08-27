// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import { IERC20 } from '@openzeppelin/contracts/token/ERC20/IERC20.sol';

// This should be owned by the microservice that is paying for gas.
contract AxelarFlashService {
    error TransferFailed();
    error NothingReceived();
    error InvalidAddress();
    error InvalidAmounts();
    error NotCollector();

    event GasPaidForFlashContractCall(
        address indexed sourceAddress,
        string destinationChain,
        string destinationAddress,
        bytes payload,
        address flashToken,
        address gasToken,
        uint256 gasFeeAmount,
        address refundAddress
    );

    event GasPaidForFlashContractCallWithToken(
        address indexed sourceAddress,
        string destinationChain,
        string destinationAddress,
        bytes payload,
        string symbol,
        uint256 amount,
        address flashToken,
        address gasToken,
        uint256 gasFeeAmount,
        address refundAddress
    );

    event NativeGasPaidForFlashContractCall(
        address indexed sourceAddress,
        string destinationChain,
        string destinationAddress,
        bytes payload,
        address flashToken,
        uint256 gasFeeAmount,
        address refundAddress
    );

    event NativeGasPaidForFlashContractCallWithToken(
        address indexed sourceAddress,
        string destinationChain,
        string destinationAddress,
        bytes payload,
        string symbol,
        uint256 amount,
        address flashToken,
        uint256 gasFeeAmount,
        address refundAddress
    );

    event FlashGasAdded(bytes32 indexed txHash, uint256 indexed logIndex, address gasToken, uint256 gasFeeAmount, address refundAddress);

    event NativeFlashGasAdded(bytes32 indexed txHash, uint256 indexed logIndex, uint256 gasFeeAmount, address refundAddress);

    address public immutable gasCollector;

    constructor(address gasCollector_) {
        gasCollector = gasCollector_;
    }

    modifier onlyCollector() {
        if (msg.sender != gasCollector) revert NotCollector();

        _;
    }

    // This is called on the source chain before calling the gateway to execute a remote contract.
    function payGasForContractCall(
        address sender,
        string calldata destinationChain,
        string calldata destinationAddress,
        bytes calldata payload,
        address flashToken,
        address gasToken,
        uint256 gasFeeAmount,
        address refundAddress
    ) external {
        _safeTransferFrom(gasToken, msg.sender, gasFeeAmount);

        emit GasPaidForFlashContractCall(
            sender,
            destinationChain,
            destinationAddress,
            payload,
            flashToken,
            gasToken,
            gasFeeAmount,
            refundAddress
        );
    }

    // This is called on the source chain before calling the gateway to execute a remote contract.
    function payGasForContractCallWithToken(
        address sender,
        string calldata destinationChain,
        string calldata destinationAddress,
        bytes calldata payload,
        string memory symbol,
        uint256 amount,
        address gasToken,
        uint256 gasFeeAmount,
        address flashToken,
        address refundAddress
    ) external {
        _safeTransferFrom(gasToken, msg.sender, gasFeeAmount);

        emit GasPaidForFlashContractCallWithToken(
            sender,
            destinationChain,
            destinationAddress,
            payload,
            symbol,
            amount,
            flashToken,
            gasToken,
            gasFeeAmount,
            refundAddress
        );
    }

    // This is called on the source chain before calling the gateway to execute a remote contract.
    function payNativeGasForContractCall(
        address sender,
        string calldata destinationChain,
        string calldata destinationAddress,
        bytes calldata payload,
        address flashToken,
        address refundAddress
    ) external payable {
        if (msg.value == 0) revert NothingReceived();

        emit NativeGasPaidForFlashContractCall(sender, destinationChain, destinationAddress, payload, flashToken, msg.value, refundAddress);
    }

    // This is called on the source chain before calling the gateway to execute a remote contract.
    function payNativeGasForContractCallWithToken(
        address sender,
        string calldata destinationChain,
        string calldata destinationAddress,
        bytes calldata payload,
        string calldata symbol,
        uint256 amount,
        address flashToken,
        address refundAddress
    ) external payable {
        if (msg.value == 0) revert NothingReceived();

        emit NativeGasPaidForFlashContractCallWithToken(
            sender,
            destinationChain,
            destinationAddress,
            payload,
            symbol,
            amount,
            flashToken,
            msg.value,
            refundAddress
        );
    }

    function addGas(
        bytes32 txHash,
        uint256 logIndex,
        address gasToken,
        uint256 gasFeeAmount,
        address refundAddress
    ) external {
        _safeTransferFrom(gasToken, msg.sender, gasFeeAmount);

        emit FlashGasAdded(txHash, logIndex, gasToken, gasFeeAmount, refundAddress);
    }

    function addNativeGas(
        bytes32 txHash,
        uint256 logIndex,
        address refundAddress
    ) external payable {
        if (msg.value == 0) revert NothingReceived();

        emit NativeFlashGasAdded(txHash, logIndex, msg.value, refundAddress);
    }

    function collectFees(
        address payable receiver,
        address[] calldata tokens,
        uint256[] calldata amounts
    ) external onlyCollector {
        if (receiver == address(0)) revert InvalidAddress();

        uint256 tokensLength = tokens.length;
        if (tokensLength != amounts.length) revert InvalidAmounts();

        for (uint256 i; i < tokensLength; i++) {
            address token = tokens[i];
            uint256 amount = amounts[i];
            if (amount == 0) revert InvalidAmounts();

            if (token == address(0)) {
                if (amount <= address(this).balance) receiver.transfer(amount);
            } else {
                if (amount <= IERC20(token).balanceOf(address(this))) _safeTransfer(token, receiver, amount);
            }
        }
    }

    function refund(
        address payable receiver,
        address token,
        uint256 amount
    ) external onlyCollector {
        if (receiver == address(0)) revert InvalidAddress();

        if (token == address(0)) {
            receiver.transfer(amount);
        } else {
            _safeTransfer(token, receiver, amount);
        }
    }

    function _safeTransfer(
        address tokenAddress,
        address receiver,
        uint256 amount
    ) internal {
        if (amount == 0) revert NothingReceived();

        (bool success, bytes memory returnData) = tokenAddress.call(abi.encodeWithSelector(IERC20.transfer.selector, receiver, amount));
        bool transferred = success && (returnData.length == uint256(0) || abi.decode(returnData, (bool)));

        if (!transferred || tokenAddress.code.length == 0) revert TransferFailed();
    }

    function _safeTransferFrom(
        address tokenAddress,
        address from,
        uint256 amount
    ) internal {
        if (amount == 0) revert NothingReceived();

        (bool success, bytes memory returnData) = tokenAddress.call(
            abi.encodeWithSelector(IERC20.transferFrom.selector, from, address(this), amount)
        );
        bool transferred = success && (returnData.length == uint256(0) || abi.decode(returnData, (bool)));

        if (!transferred || tokenAddress.code.length == 0) revert TransferFailed();
    }

    function contractId() external pure returns (bytes32) {
        return keccak256('axelar-flash-service');
    }
}