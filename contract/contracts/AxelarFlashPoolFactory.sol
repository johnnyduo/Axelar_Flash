// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {IAxelarGateway} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

interface IAxelarFlashPool {
    function initialize(
        address _relayer,
        address _gateway,
        address _target,
        address _token
    ) external;

    function flashExecute(
        bytes32 commandId,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload
    ) external payable;

    function flashExecuteWithToken(
        bytes32 commandId,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload,
        string calldata symbol,
        uint256 amount
    ) external payable;
}

contract AxelarFlashPoolFactory is Ownable {
    address public immutable relayer;
    IAxelarGateway public gateway;
    address public immutable implementation;

    IERC20 public listingFeeToken;
    uint256 public listingFeePrice;

    mapping(bytes32 => address) poolRegistry;

    constructor(
        address _relayer,
        address _implementation
    ) {
        relayer = _relayer;
        implementation = _implementation;
    }

    // Hackathon only
    function setGateway(IAxelarGateway _gateway) public onlyOwner {
        gateway = _gateway;
    }

    function setListingFee(
        IERC20 _listingFeeToken,
        uint256 _listingFeePrice
    ) public onlyOwner {
        listingFeeToken = _listingFeeToken;
        listingFeePrice = _listingFeePrice;
    }

    event RegisterPool(address indexed relayer, address indexed target, address indexed token, address gateway);
    function registerPool(address target, address token) public {
        if (address(listingFeeToken) != address(0)) {
            IERC20(listingFeeToken).transferFrom(msg.sender, address(this), listingFeePrice);
        }
        
        address pool = Clones.cloneDeterministic(
            implementation,
            keccak256(abi.encodePacked(target, token))
        );

        IAxelarFlashPool(pool).initialize(
            relayer,
            address(gateway),
            target,
            token
        );

        poolRegistry[keccak256(abi.encodePacked(target, token))] = pool;

        emit RegisterPool(relayer, target, token, address(gateway));
    }

    function getFlashPoolAddress(address target, address token) public view returns(address pool) {
        pool = poolRegistry[keccak256(abi.encodePacked(target, token))];

        // if (pool == address(0)) {
        //     pool = Clones.predictDeterministicAddress(
        //         implementation,
        //         keccak256(abi.encodePacked(target, token))
        //     );
        // }
    }

    function withdrawFee() public onlyOwner {
        IERC20(listingFeeToken).transfer(msg.sender, IERC20(listingFeeToken).balanceOf(address(this)));
    }

    // Temporary for hackathon
    event Fuck();
    function flashExecute(
        address target,
        address token,
        bytes32 commandId,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload
    ) external payable virtual {
        require(msg.sender == relayer, "Not relayer");

        IAxelarFlashPool pool = IAxelarFlashPool(getFlashPoolAddress(target, token));

        pool.flashExecute(commandId, sourceChain, sourceAddress, payload);

        emit Fuck();
    }

    function flashExecuteWithToken(
        address target,
        address token,
        bytes32 commandId,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload,
        string calldata symbol,
        uint256 amount
    ) external payable virtual {
        require(msg.sender == relayer, "Not relayer");

        IAxelarFlashPool pool = IAxelarFlashPool(getFlashPoolAddress(target, token));

        pool.flashExecuteWithToken(commandId, sourceChain, sourceAddress, payload, symbol, amount);
    }
}
