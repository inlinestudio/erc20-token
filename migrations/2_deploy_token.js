const Token = artifacts.require('Token');
require('dotenv').config({ path: '../.env' });

module.exports = async function (deployer) {
  // Token
  await deployer.deploy(
    Token,
    process.env.TOKEN_NAME,
    process.env.TOKEN_SYMBOL,
    process.env.TOKEN_DECIMALS,
    process.env.INITIAL_TOKENS,
  );
};