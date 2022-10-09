//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract Products is ERC1155 {
    address public owner;
    mapping(uint256 => string) private _tokenURIs;
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;

    modifier isOwner() {
        require(owner == msg.sender, "Not owner");
        _;
    }

    constructor() ERC1155("") {
        owner = msg.sender;
    }

    function createProduct(string memory _tokenURI) public isOwner {
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId, 1, "");
        _setTokenUri(newItemId, _tokenURI);
        _tokenIds.increment();
    }

    function addProduct(uint _tokenId, uint _amount) public isOwner {
        _mint(msg.sender, _tokenId, _amount, "");
    }

    function uri(uint256 _tokenId) public view override returns (string memory) {
        return (_tokenURIs[_tokenId]);
    }

    function updateURI(uint _tokenId, string memory _tokenURI) public isOwner {
        _setTokenUri(_tokenId, _tokenURI);
    }

    function _setTokenUri(uint256 _tokenId, string memory _tokenURI) private {
        _tokenURIs[_tokenId] = _tokenURI;
    }

    function burnProduct(uint256 _id) public isOwner {
        _burn(msg.sender, _id, 1);
    }
}
