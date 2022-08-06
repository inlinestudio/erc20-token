const Splitter = artifacts.require('Splitter');
require('dotenv').config({ path: '../.env' });

module.exports = async function (deployer) {
  const devAddress = process.env.DEV_WALLET;
  const ownerAddress = process.env.OWNER_WALLET;
  const payees = [devAddress, ownerAddress];
  const shares = [10, 90];

  // Payment splitter
  await deployer.deploy(Splitter, payees, shares);
};