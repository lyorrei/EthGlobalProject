var deliveryMan = artifacts.require('deliveryMan.sol')
var orders = artifacts.require('orders.sol')
var storesManagement = artifacts.require('storesManagement.sol')

const fs = require('fs').promises

module.exports = async function (deployer) {
    try {
        // Array with contracts' name and address
        let contractsAddresses = {}

        await deployer.deploy(deliveryMan)
        await deployer.deploy(orders)
        await deployer.deploy(storesManagement)

        contractsAddresses['deliveryMan'] = deliveryMan.address
        contractsAddresses['orders'] = orders.address
        contractsAddresses['storesManagement'] = storesManagement.address

        await writeAddresses(contractsAddresses)
    } catch (err) {
        console.log(err)
    }
}

const writeAddresses = async (contractsAddresses) => {
    const data = await fs.readFile(__dirname + '/../contractsAddresses.json', 'utf8')

    const newJson = JSON.parse(data) //now it an object
    newJson.addresses.push(contractsAddresses) //add some data

    // Create Json with Addresses
    const jsonAddressObject = JSON.stringify(newJson)

    await fs.writeFile(__dirname + '/../contractsAddresses.json', jsonAddressObject, 'utf8')
    console.log('Arquivo com endereço de contratos criados')
}
