const { ethers } = require("ethers");

const ADDR = "0x8C436aeF7370E7008De00ee81F493EA7341B3cDF"; // your contract address
const ABI = [
  "function getBalances(address walletAddress, address[] calldata tokenContractAddresses) view returns (tuple(address contractAddress, uint256 balance)[])",
]; // your contract ABI

const ADDRESS = "0x000095E79eAC4d76aab57cB2c1f091d553b36ca0"; // some wallet address with token balance
const TOKENS = [
  // token contract addresses
  "0x7a8351d0c15C830Cdb96F40D0fEe042C1D5012F2",
  "0xa33F5980c387603cFF95747cbE0516b2C47f31F8",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.providers.JsonRpcProvider(
  "https://goerli.infura.io/v3/<key>"
);

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);

  let balances = await contract.getBalances(ADDRESS, TOKENS);
  balances = balances.map((holder) => {
    return {
      token: holder[0],
      balance: holder[1],
    };
  });

  return balances;
};

test().then(console.log);
