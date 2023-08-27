// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Import axelar libraries
import "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol";
import "@axelar-network/axelar-gmp-sdk-solidity/contracts/libs/AddressString.sol";
import {AxelarFlashExecutable} from "../AxelarFlashExecutable.sol";
import {IAxelarFlashService} from "../IAxelarFlashService.sol";

contract MyNFT is ERC721, ERC721Burnable, Ownable, AxelarFlashExecutable {
    // Store gas service
    IAxelarGasService public immutable gasService;
    IAxelarFlashService public immutable flashService;

    // Minting
    IERC20 public immutable mintFeeToken;
    uint256 public immutable mintFee;
    uint256 public currentTokenId = 0;

    string public thisAddress;

    // Receive gateway and gas service
    constructor(
        string memory name_,
        string memory symbol_,
        IERC20 _mintFeeToken,
        uint256 _mintFee,
        IAxelarGateway _gateway,
        IAxelarGasService _gasService,
        IAxelarFlashService _flashService
    ) ERC721(name_, symbol_) AxelarFlashExecutable(address(_gateway)) {
        mintFeeToken = _mintFeeToken;
        mintFee = _mintFee;

        gasService = _gasService;
        flashService = _flashService;

        thisAddress = AddressToString.toString(address(this));
    }

    event Buy(string destinationChain, string destinationAddress);

    // Send message
    function buy(
        string calldata destinationChain,
        uint256 nonce
    ) external payable {
        // Pay minting fee on source chain
        mintFeeToken.transferFrom(msg.sender, address(this), mintFee);

        // ABI encode payload
        bytes memory payload = abi.encode(msg.sender, nonce);

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
                address(mintFeeToken),
                msg.sender
            );
        }

        // Submit a cross-chain message passing transaction
        gateway.callContract(destinationChain, thisAddress, payload);

        // Emit event
        emit Buy(destinationChain, thisAddress);
    }

    // Receive message
    event Unlock(address indexed to, uint256 amount);

    function _execute(
        string calldata,
        string calldata sourceAddress,
        bytes calldata payload
    ) internal override {
        // TODO: Validate sourceChain and sourceAddress
        require(
            StringToAddress.toAddress(sourceAddress) == address(this),
            "Forbidden"
        );

        // TODO: Decode payload
        (address to) = abi.decode(payload, (address));

        // TODO: Unlock (Mint) token
        _safeMint(to, ++currentTokenId);

        // TODO: Emit event
        emit Unlock(to, currentTokenId);
    }

    function _executeWithExpress(
        address express,
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload
    ) internal virtual override {
        mintFeeToken.transferFrom(express, address(this), mintFee);
        _execute(sourceChain, sourceAddress, payload);
    }

    function _executeReturnToExpress(
        address express,
        string calldata,
        string calldata,
        bytes calldata
    ) internal virtual override {
        mintFeeToken.transfer(express, mintFee);
    }
}
