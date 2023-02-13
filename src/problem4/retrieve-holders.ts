import { ethers, formatUnits } from "ethers";

// public rpc node from https://docs.bscscan.com/misc-tools-and-utilities/public-rpc-nodes
const bscApi = "https://bsc-dataseed1.binance.org";
const provider = ethers.getDefaultProvider(bscApi);
const contractAddress = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

const addresses: string[] = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

// https://docs.ethers.org/v6/getting-started/#:~:text=A%20read%2Donly%20method%20is%20one%20which%20cannot%20change%20the%20state%20of%20the%20blockchain%2C%20but%20often%20provide%20a%20simple%20interface%20to%20get%20important%20data%20about%20a%20Contract.
const abi = [
  "function decimals() view returns (uint8)",
  "function balanceOf(address a) view returns (uint)",
];
const contract = new ethers.Contract(contractAddress, abi, provider);

async function retrieveHolders() {
  const decimals = await contract.decimals();

  for (let i = 0; i < addresses.length; i++) {
    let balance = await contract.balanceOf(addresses[i]);
    console.log(`${addresses[i]} ${formatUnits(balance, decimals)}`);
  }
}

retrieveHolders();
