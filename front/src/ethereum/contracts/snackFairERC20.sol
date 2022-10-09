// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "../../../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SnackFairERC20 is ERC20 {
    address _owner;

    modifier isOwner() {
        address owner = _msgSender();
        require(_owner == owner, "Not owner");
        _;
    }

    constructor(address _ownerFrom) ERC20("SnackFair", "SFD") {
        _owner = _ownerFrom;
        uint256 amout = 1500000 * (10 ^ 18);
        _mint(msg.sender, amout);
    }
}
