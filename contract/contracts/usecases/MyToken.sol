// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol";
import "@axelar-network/axelar-gmp-sdk-solidity/contracts/libs/AddressString.sol";
import {AxelarFlashExecutable} from "../AxelarFlashExecutable.sol";
import {IAxelarFlashService} from "../IAxelarFlashService.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable, AxelarFlashExecutable {
    IAxelarGasService public immutable gasService;
    IAxelarFlashService public immutable flashService;

    string public thisAddress;

    constructor(
        string memory name_,
        string memory symbol_,
        address gateway_,
        address gasService_,
        address flashService_
    ) ERC20(name_, symbol_) AxelarFlashExecutable(gateway_) {
        gasService = IAxelarGasService(gasService_);
        flashService = IAxelarFlashService(flashService_);

        thisAddress = AddressToString.toString(address(this));
    }

    // Free mint for hackathon
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

    event Lock(string destinationChain, string destinationAddress, uint256 amount);

    function bridge(
        string calldata destinationChain,
        uint256 amount,
        uint256 nonce
    ) external payable {
        // Lock (Burn) token in the source chain
        _burn(msg.sender, amount);

        // ABI encode payload
        bytes memory payload = abi.encode(msg.sender, amount, nonce);

        // Pay gas fee to gas receiver contract
        if (msg.value > 0) {
            gasService.payNativeGasForContractCall{value: msg.value >> 1}(
                address(this),
                destinationChain,
                thisAddress,
                payload,
                msg.sender
            );

            flashService.payNativeGasForContractCall{value: msg.value >> 1}(
                address(this),
                destinationChain,
                thisAddress,
                payload,
                address(this),
                msg.sender
            );
        }

        // Submit a cross-chain message passing transaction
        gateway.callContract(destinationChain, thisAddress, payload);

        // Emit event
        emit Lock(destinationChain, thisAddress, amount);
    }

    event Unlock(address indexed to, uint256 amount);

    function _execute(
        string calldata,
        string calldata sourceAddress,
        bytes calldata payload
    ) internal override {
        // Validate sourceChain and sourceAddress
        require(
            StringToAddress.toAddress(sourceAddress) == address(this),
            "Forbidden"
        );

        // Decode payload
        (address to, uint256 amount) = abi.decode(payload, (address, uint256));

        // Unlock (Mint) token
        _mint(to, amount);

        // Emit event
        emit Unlock(to, amount);
    }

    function _executeWithExpress(
        address express,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload
    ) internal virtual override {
        // Decode amount from payload
        (, uint256 amount) = abi.decode(payload, (address, uint256));

        _transfer(express, address(this), amount);
        _execute(sourceChain, sourceAddress, payload);
    }

    function _executeReturnToExpress(
        address express,
        string calldata,
        string calldata,
        bytes calldata payload
    ) internal virtual override {
        // Decode amount from payload
        (, uint256 amount) = abi.decode(payload, (address, uint256));

        _transfer(address(this), express, amount);
    }
}
