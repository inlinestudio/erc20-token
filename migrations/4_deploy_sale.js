const Token = artifacts.require('Token');
const Splitter = artifacts.require('Splitter');
const TokenSale = artifacts.require('TokenSale');
require('dotenv').config({ path: '../.env' });
var dayjs = require('dayjs');

require('web3');

module.exports = async function (deployer) {
  /**
   * The rates should be in ascending order based on the opening time
   * first param is the exchange rate for the token / wei
   * second param is an unix epoch for the start time
   * third param is an unix epoch for the close time
   */
  const rates = [
    [
      '56000000000000',
      dayjs('2021-11-26 00:00:00', 'YYYY-MM-DD HH:mm:ss').second(0).unix(),
      dayjs('2021-11-27 23:59:59', 'YYYY-MM-DD HH:mm:ss').second(0).unix(),
    ],
    [
      '114000000000000',
      dayjs('2021-11-28 00:00:00', 'YYYY-MM-DD HH:mm:ss').second(0).unix(),
      dayjs('2021-11-30 23:59:59', 'YYYY-MM-DD HH:mm:ss').second(0).unix(),
    ],
    [
      '173000000000000',
      dayjs('2021-12-01 00:00:00', 'YYYY-MM-DD HH:mm:ss').second(0).unix(),
      dayjs('2021-12-06 23:59:59', 'YYYY-MM-DD HH:mm:ss').second(0).unix(),
    ],
  ];

  // Crowdsale
  await deployer.deploy(
    TokenSale,
    process.env.TOKEN_DECIMALS,
    rates,
    Splitter.address,
    Token.address,
  );
};