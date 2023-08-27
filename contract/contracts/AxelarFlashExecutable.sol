// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import { IERC20 } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IERC20.sol';
import { IAxelarGateway } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import { ExpressExecutorTracker } from "@axelar-network/axelar-gmp-sdk-solidity/contracts/express/ExpressExecutorTracker.sol";
import { SafeTokenTransferFrom, SafeTokenTransfer } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/libs/SafeTransfer.sol';

contract AxelarFlashExecutable is ExpressExecutorTracker {
    using SafeTokenTransfer for IERC20;
    using SafeTokenTransferFrom for IERC20;

    IAxelarGateway public immutable gateway;

    constructor(address gateway_) {
        if (gateway_ == address(0)) revert InvalidAddress();

        gateway = IAxelarGateway(gateway_);
    }

    function execute(
        bytes32 commandId,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload
    ) external {
        bytes32 payloadHash = keccak256(payload);

        if (!gateway.validateContractCall(commandId, sourceChain, sourceAddress, payloadHash))
            revert NotApprovedByGateway();

        // address expressExecutor = _popExpressExecutor(commandId, sourceChain, sourceAddress, payloadHash);
        address expressExecutor = _popExpressExecutor(payloadHash, sourceChain, sourceAddress, payloadHash);

        if (expressExecutor != address(0)) {
            _executeReturnToExpress(expressExecutor, sourceChain, sourceAddress, payload);

            // slither-disable-next-line reentrancy-events
            emit ExpressExecutionFulfilled(commandId, sourceChain, sourceAddress, payloadHash, expressExecutor);
        } else {
            _execute(sourceChain, sourceAddress, payload);
        }
    }

    function executeWithToken(
        bytes32 commandId,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload,
        string calldata tokenSymbol,
        uint256 amount
    ) external {
        bytes32 payloadHash = keccak256(payload);
        if (
            !gateway.validateContractCallAndMint(
                commandId,
                sourceChain,
                sourceAddress,
                payloadHash,
                tokenSymbol,
                amount
            )
        ) revert NotApprovedByGateway();

        // address expressExecutor = _popExpressExecutorWithToken(
        //     commandId,
        //     sourceChain,
        //     sourceAddress,
        //     payloadHash,
        //     tokenSymbol,
        //     amount
        // );
        address expressExecutor = _popExpressExecutorWithToken(
            payloadHash,
            sourceChain,
            sourceAddress,
            payloadHash,
            tokenSymbol,
            amount
        );

        if (expressExecutor != address(0)) {
            // slither-disable-next-line reentrancy-events
            emit ExpressExecutionWithTokenFulfilled(
                commandId,
                sourceChain,
                sourceAddress,
                payloadHash,
                tokenSymbol,
                amount,
                expressExecutor
            );

            address gatewayToken = gateway.tokenAddresses(tokenSymbol);
            IERC20(gatewayToken).safeTransfer(expressExecutor, amount);

            _executeWithTokenReturnToExpress(expressExecutor, sourceChain, sourceAddress, payload, tokenSymbol, amount);
        } else {
            _executeWithToken(sourceChain, sourceAddress, payload, tokenSymbol, amount);
        }
    }

    function expressExecute(
        bytes32 commandId,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload
    ) external payable virtual {
        // if (gateway.isCommandExecuted(commandId)) revert AlreadyExecuted();

        address expressExecutor = msg.sender;
        bytes32 payloadHash = keccak256(payload);

        emit ExpressExecuted(commandId, sourceChain, sourceAddress, payloadHash, expressExecutor);

        // _setExpressExecutor(commandId, sourceChain, sourceAddress, payloadHash, expressExecutor);
        _setExpressExecutor(payloadHash, sourceChain, sourceAddress, payloadHash, expressExecutor);

        _executeWithExpress(expressExecutor, sourceChain, sourceAddress, payload);
    }

    function expressExecuteWithToken(
        bytes32 commandId,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload,
        string calldata symbol,
        uint256 amount
    ) external payable virtual {
        // if (gateway.isCommandExecuted(commandId)) revert AlreadyExecuted();

        address expressExecutor = msg.sender;
        address gatewayToken = gateway.tokenAddresses(symbol);
        bytes32 payloadHash = keccak256(payload);

        emit ExpressExecutedWithToken(
            commandId,
            sourceChain,
            sourceAddress,
            payloadHash,
            symbol,
            amount,
            expressExecutor
        );

        // _setExpressExecutorWithToken(
        //     commandId,
        //     sourceChain,
        //     sourceAddress,
        //     payloadHash,
        //     symbol,
        //     amount,
        //     expressExecutor
        // );

        _setExpressExecutorWithToken(
            payloadHash,
            sourceChain,
            sourceAddress,
            payloadHash,
            symbol,
            amount,
            expressExecutor
        );

        IERC20(gatewayToken).safeTransferFrom(expressExecutor, address(this), amount);

        _executeWithTokenExpress(expressExecutor, sourceChain, sourceAddress, payload, symbol, amount);
    }

    function _execute(
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload
    ) internal virtual {}

    function _executeWithExpress(
        address express,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload
    ) internal virtual {
        _execute(sourceChain, sourceAddress, payload);
    }

    function _executeReturnToExpress(
        address express,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload
    ) internal virtual {}

    function _executeWithToken(
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload,
        string calldata tokenSymbol,
        uint256 amount
    ) internal virtual {
        _execute(sourceChain, sourceAddress, payload);
    }

    function _executeWithTokenExpress(
        address express,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload,
        string calldata tokenSymbol,
        uint256 amount
    ) internal virtual {
        _executeWithToken(sourceChain, sourceAddress, payload, tokenSymbol, amount);
    }

    function _executeWithTokenReturnToExpress(
        address express,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload,
        string calldata tokenSymbol,
        uint256 amount
    ) internal virtual {}
}