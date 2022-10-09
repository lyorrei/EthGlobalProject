//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Users {
    // State variables

    mapping(address => uint256) public userStakedAmount;
    mapping(address => uint256[]) public usersOrders;

    event stakeReceived(uint256);

    function stakeToOrder() public payable {
        userStakedAmount[msg.sender] = msg.value;
        emit stakeReceived(msg.value);
    }

    function unstakeToNotOrder() public {
        require(userStakedAmount[msg.sender] > 0, "You don't have anything to withdraw");
        payable(msg.sender).transfer(userStakedAmount[msg.sender]);
    }

    function seeDeliveries(address _user) public view returns (uint[] memory) {
        return usersOrders[_user];
    }

    function _delivery(uint _orderId) internal {
        usersOrders[msg.sender].push(_orderId);
    }
}
