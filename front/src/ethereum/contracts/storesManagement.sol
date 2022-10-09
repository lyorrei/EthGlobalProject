// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

contract StoresManagement {
    address private owner;
    address[] public stores;

    modifier isOwner() {
        require(owner == msg.sender, "Not owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addNewStore(address _address) public {
        stores.push(_address);
    }

    function getStores() view public returns(address[] memory) {
        return stores;
    }
}
