// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./snackFairERC20.sol";

contract StakeERC20 {
    mapping(address => uint256) tokensStaked;

    address public snackFairAddress;

    constructor(address _address) {
        snackFairAddress = _address;
    }

    function stakeTokens(uint256 _stakedAmount) public payable {
        uint256 amount = _stakedAmount * (10 ^ 18);
        SnackFairERC20(snackFairAddress).transferFrom(
            msg.sender,
            address(this),
            amount
        );

        tokensStaked[msg.sender] = amount;
    }

    function unstakeTokens() public {
        require(
            tokensStaked[msg.sender] > 0,
            "Don't have any tokens to unstake"
        );
        SnackFairERC20(snackFairAddress).transferFrom(
            address(this),
            msg.sender,
            tokensStaked[msg.sender]
        );
    }
}
