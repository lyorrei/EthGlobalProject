//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract DeliveryMan {
    // State variables

    mapping(address => uint256) public deliverManStakedAmount;
    mapping(address => uint256[]) public deliverManOrders;

    event stakeToDeliverReceived(uint256);

    function stakeToDeliver() public payable {
        deliverManStakedAmount[msg.sender] = msg.value;
        emit stakeToDeliverReceived(msg.value);
    }

    function unstakeToNotDeliver() public {
        require(
            deliverManStakedAmount[msg.sender] > 0,
            "You don't have anything to withdraw"
        );
        payable(msg.sender).transfer(deliverManStakedAmount[msg.sender]);
    }

    function seeOrders(address _user) public view returns (uint256[] memory) {
        return deliverManOrders[_user];
    }

    function _ordered(uint256 _orderId) internal {
        deliverManOrders[msg.sender].push(_orderId);
    }
}
