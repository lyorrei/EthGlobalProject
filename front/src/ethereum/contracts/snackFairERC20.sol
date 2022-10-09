// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

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

    // Override functions

    function increaseAllowance(address spender, uint256 addedValue)
        public
        override
        returns (bool)
    {
        address owner = _msgSender();
        addedValue = addedValue * (10**18);
        _approve(owner, spender, allowance(owner, spender) + addedValue);
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue)
        public
        override
        returns (bool)
    {
        address owner = _msgSender();
        subtractedValue = subtractedValue * (10**18);
        uint256 currentAllowance = allowance(owner, spender);
        require(
            currentAllowance >= subtractedValue,
            "ERC20: decreased allowance below zero"
        );
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }
}
