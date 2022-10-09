// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import "../../../node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "../../../node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "./product.sol";
import "./orders.sol";
import "./storesManagement.sol";

contract Store is ERC1155Holder, ERC721Holder {
    string public name;
    string public document;
    string public uri;
    string public physicalAddress;
    address public owner;
    uint256 public openRequests;
    address private ordersAddress;
    Products public products;
    Orders ordersInstance;
    StoresManagement storesManagementInstance;

    event ProductAdded(string);
    event OrderReceived(address);

    modifier isOwner() {
        require(owner == msg.sender, "Not owner");
        _;
    }

    constructor(
        string memory _name,
        string memory _document,
        address _ordersAddress,
        address _storesManagementAddress,
        string _physicalAddress,
        string _uri
    ) {
        owner = msg.sender;
        name = _name;
        document = _document;
        products = new Products();
        ordersAddress = _ordersAddress;
        ordersInstance = Orders(ordersAddress);
        storesManagementInstance = StoresManagement(_storesManagementAddress);
        storesManagementInstance.addNewStore(address(this));
        uri = _uri;
        physicalAddress = _physicalAddress;
    }

    function createProduct(string memory _tokenURI, uint256 _amount)
        public
        isOwner
    {
        products.createProduct(_tokenURI, _amount);
    }

    function removeProduct(uint256 _id, uint256 _amount) public isOwner {
        products.burnProduct(_id, _amount);
    }

    function getProducts() public {
        uint256 id = products._tokenIds();
        uint256[] memory itens;
        address[] addresses;
        string[] uris;
        for (uint256 i = 0; i < id; i++) {
            itens[i] = i;
            addresses[i] = address(this);
        }
        uint256[] amountOfItens = products.balanceOfBatch(addresses, itens);
        for (uint256 i = 0; i < id; i++) {
            if (amountOfItens[i] > 0) {
                uris.push(products.uri(i));
            }
        }
        return uris;
    }

    function sendOrder(address _deliveryMan, uint256 _orderId) public isOwner {
        Orders.OrderDetails[] memory itens = ordersInstance
            .getOrderDetailsArray(_orderId);
        uint256[] memory itensId;
        uint256[] memory itensAmount;
        for (uint256 i = 0; i <= itens.length; i++) {
            itensId[i] = itens[i]._itemId;
            itensAmount[i] = itens[i]._amount;
        }
        products.safeBatchTransferFrom(
            msg.sender,
            _deliveryMan,
            itensId,
            itensAmount,
            ""
        );
        ordersInstance.changeOrderStatus(_orderId, 2);
        ordersInstance.transferFrom(msg.sender, _deliveryMan, _orderId);
    }

    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) public override returns (bytes4) {
        emit ProductAdded("Product added with success");
        return this.onERC1155Received.selector;
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes memory
    ) public override returns (bytes4) {
        if (msg.sender == ordersAddress) emit OrderReceived(msg.sender);
        return this.onERC721Received.selector;
    }
}
