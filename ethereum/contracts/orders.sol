//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "./users.sol";
import "./deliveryMan.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";
import "../node_modules/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Orders is ERC721, Users, DeliveryMan {
    // State variables

    address public owner;

    AggregatorV3Interface internal priceFeed;

    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;

    mapping(uint256 => string) private _tokenURIs;

    mapping(uint256 => OrderDetails[]) private ordersItens;

    mapping(uint256 => uint256) public ordersStatus;

    mapping(uint256 => address) public orderCreator;

    mapping(uint256 => uint256) public orderPrice;

    struct OrderDetails {
        uint256 _itemId;
        uint256 _amount;
    }

    modifier isOwner() {
        require(owner == msg.sender, "Not owner");
        _;
    }

    constructor() ERC721("Order", "ODR") {
        owner = msg.sender;
        priceFeed = AggregatorV3Interface(
            0x9326BFA02ADD2366b30bacB125260Af641031331
        );
    }

    //Getting the latestPrice of dollar throught chainlinks
    function getLatestPrice() public view returns (int256) {
        (
            uint80 roundID,
            int256 price,
            uint256 startedAt,
            uint256 timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return price;
    }

    function createOrder(
        string memory _tokenURI,
        address _to,
        uint256 _price,
        uint256[] memory _orderItens,
        uint256[] memory _amount
    ) public payable {
        // Verifying with the person that is ordering is able to order
        uint256 usdPrice = uint256(getLatestPrice());
        require((msg.value * usdPrice) >= _price, "Wrong ammount of ETH");
        require(userStakedAmount[msg.sender] >= 10000000000000000);

        // Picking the actual token id
        uint256 newItemId = _tokenIds.current();

        // Minting the order, setting its URI with the specifications of the order that is in IPFS and after that transfering it to the restaurant responsible for its preparation
        _mint(msg.sender, newItemId);
        orderCreator[newItemId] = msg.sender;
        _setTokenURI(newItemId, _tokenURI);
        _transfer(msg.sender, _to, newItemId);
        orderPrice[newItemId] = msg.value;

        // Setting the status of the order
        ordersStatus[newItemId] = 0;

        // a loop to set which products was solicited by the user
        for (uint256 i = 0; i <= _orderItens.length; i++) {
            ordersItens[newItemId].push(
                OrderDetails(_orderItens[i], _amount[i])
            );
        }

        // Registering the order ID to the wallet of the user
        _ordered(newItemId);

        // Increasing the id to create a new NFT after
        _tokenIds.increment();
    }

    function cancelOrder(uint256 _id) public isOwner {
        require(_exists(_id), "ERC721Metadata: URI set of nonexistent token");
        _burn(_id);
        ordersStatus[_id] = 5;
    }

    function getOrderDetailsArray(uint256 _orderItensIndex)
        public
        view
        returns (OrderDetails[] memory)
    {
        return ordersItens[_orderItensIndex];
    }

    function takeOrder(uint256 _id) public {
        require(
            deliverManStakedAmount[msg.sender] >= 10000000000000000,
            "Dont have enought staked money to deliver"
        );
        require(ordersStatus[_id] == 0, "Order already taken");
        deliverManOrders[msg.sender].push(_id);
        ordersStatus[_id] = 1;
    }

    function changeOrderStatus(uint256 _id, uint256 _newValue) public {
        require(ownerOf(_id) == msg.sender, "Not owner to change this status");
        ordersStatus[_id] = _newValue;
    }

    function deliverOrder(uint256 _orderId) public {
        require(
            ownerOf(_orderId) == msg.sender,
            "Not owner to change this status"
        );
        transferFrom(msg.sender, orderCreator[_orderId], _orderId);
        ordersStatus[_orderId] = 3;
    }

    // Functions overrides or internals

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI set of nonexistent token"
        );
        _tokenURIs[tokenId] = _tokenURI;
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override {
        //solhint-disable-next-line max-line-length
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: caller is not token owner nor approved"
        );
        require(ordersStatus[tokenId] != 3, "This order is already finished");

        _transfer(from, to, tokenId);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override {
        require(ordersStatus[tokenId] != 3, "This order is already finished");
        safeTransferFrom(from, to, tokenId, "");
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public override {
        require(ordersStatus[tokenId] != 3, "This order is already finished");
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: caller is not token owner nor approved"
        );
        _safeTransfer(from, to, tokenId, data);
    }
}
