// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {IAxelarGateway} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import {IAxelarExpressExecutable} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarExpressExecutable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

import {ERC721Holder} from "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import {ERC1155Holder} from "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

// Allow holding NFT for more use cases in the future
contract AxelarFlashPool is Initializable, ERC721Holder, ERC1155Holder {
    using SafeERC20 for IERC20;

    error AlreadyExecuted();
    error NotRelayer(address caller);

    event FlashExecute(bytes32 indexed command, string sourceChain, string sourceAddress, bytes payload);
    event FlashExecuteWithToken(bytes32 indexed command, string sourceChain, string sourceAddress, bytes payload, string symbol, uint256 amount);

    address public relayer;
    IAxelarGateway public gateway;
    IAxelarExpressExecutable public target;
    IERC20 public token;

    mapping(address => uint256) public investAmount;

    function initialize(
        address _relayer,
        address _gateway,
        address _target,
        address _token
    ) public initializer {
        relayer = _relayer;
        gateway = IAxelarGateway(_gateway);
        target = IAxelarExpressExecutable(_target);
        token = IERC20(_token);

        token.safeApprove(_target, type(uint256).max);
    }

    function flashExecute(
        bytes32 commandId,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload
    ) external payable virtual {
        if (msg.sender != relayer) revert NotRelayer(msg.sender);
        if (gateway.isCommandExecuted(commandId)) revert AlreadyExecuted();

        target.expressExecute(
            commandId,
            sourceChain,
            sourceAddress,
            payload
        );
        
        emit FlashExecute(
            commandId,
            sourceChain,
            sourceAddress,
            payload
        );
    }

    function flashExecuteWithToken(
        bytes32 commandId,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload,
        string calldata symbol,
        uint256 amount
    ) external payable virtual {
        if (msg.sender != relayer) revert NotRelayer(msg.sender);
        if (gateway.isCommandExecuted(commandId)) revert AlreadyExecuted();

        target.expressExecuteWithToken(
            commandId,
            sourceChain,
            sourceAddress,
            payload,
            symbol,
            amount
        );

        emit FlashExecuteWithToken(
            commandId,
            sourceChain,
            sourceAddress,
            payload,
            symbol,
            amount
        );
    }

    event Invest(address indexed investor, uint256 amount);
    function invest(uint256 amount) public {
        investAmount[msg.sender] += amount;
        token.safeTransferFrom(msg.sender, address(this), amount);
        emit Invest(msg.sender, amount);
    }

    event Withdraw(address indexed investor, uint256 amount);
    function withdraw(uint256 amount) public {
        investAmount[msg.sender] -= amount;
        token.safeTransfer(msg.sender, amount);
        emit Withdraw(msg.sender, amount);
    }

    event ProvideIncentive(address indexed projectOwner, uint256 amount);
    function provideIncentive(uint256 amount) public {
        token.safeTransfer(msg.sender, amount);
        emit ProvideIncentive(msg.sender, amount);
    }
}
