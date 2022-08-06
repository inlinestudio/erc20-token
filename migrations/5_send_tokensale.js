const Token = artifacts.require('Token');
const TokenSale = artifacts.require('TokenSale');
require('dotenv').config({ path: '../.env' });

require('web3');

module.exports = async function (deployer) {
  // Transfer crowdsale
  let tokenInstance = await Token.deployed();
  await tokenInstance.transfer(
    TokenSale.address,
    web3.utils
      .toBN(process.env.CROWDSALE_TOKENS)
      .mul(web3.utils.toBN(Math.pow(10, process.env.TOKEN_DECIMALS))),
  );
};