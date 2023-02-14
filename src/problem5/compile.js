const path = require("path");
const fs = require("fs");
const solc = require("solc");

const tokenBalancePath = path.resolve(
  __dirname,
  "contracts",
  "TokenBalance.sol"
);
const source = fs.readFileSync(tokenBalancePath, "utf8");

module.exports = solc.compile(source, 1).contracts[":TokenBalance"];
