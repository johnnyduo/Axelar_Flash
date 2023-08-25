// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {IAxelarGateway} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

interface IAxelarFlashPoolInitializer {
    function initialize(
        address _relayer,
        address _gateway,
        address _target,
        address _token
    ) external;
}

contract AxelarFlashPoolFactory is Ownable {
    address public immutable relayer;
    IAxelarGateway public immutable gateway;
    address public immutable implementation;

    IERC20 public immutable listingFeeToken;
    uint256 public immutable listingFeePrice;

    constructor(
        address _relayer,
        IAxelarGateway _gateway,
        address _implementation,
        IERC20 _listingFeeToken,
        uint256 _listingFeePrice
    ) {
        relayer = _relayer;
        gateway = _gateway;
        implementation = _implementation;

        listingFeeToken = _listingFeeToken;
        listingFeePrice = _listingFeePrice;
    }

    event RegisterPool(address indexed relayer, address indexed target, address indexed token, address gateway);
    function registerPool(address target, address token) public {
        IERC20(listingFeeToken).transferFrom(msg.sender, address(this), listingFeePrice);
        
        address pool = Clones.cloneDeterministic(
            implementation,
            keccak256(abi.encodePacked(target, token))
        );

        IAxelarFlashPoolInitializer(pool).initialize(
            relayer,
            address(gateway),
            target,
            token
        );

        emit RegisterPool(relayer, target, token, address(gateway));
    }

    function getFlashPoolAddress(address target, address token) public view returns(address) {
        return Clones.predictDeterministicAddress(
            implementation,
            keccak256(abi.encodePacked(target, token))
        );
    }

    function withdrawFee() public onlyOwner {
        IERC20(listingFeeToken).transfer(msg.sender, IERC20(listingFeeToken).balanceOf(address(this)));
    }
}
