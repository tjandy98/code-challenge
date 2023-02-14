const Demo_Contract = artifacts.require("TokenBalance");

module.exports = function (deployer) {
  deployer.deploy(Demo_Contract);
};
