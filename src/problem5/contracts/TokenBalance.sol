pragma solidity ^0.8.17;



// https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#IERC20-balanceOf-address-
interface Token {
    function balanceOf(address _owner) external view returns (uint);
}
contract TokenBalance 
{
 

  struct Balance { 
        address contractAddress;
        uint balance;
    }

    function getBalances(address walletAddress, address[] calldata tokenContractAddresses) external view returns(Balance[] memory) {
    
        Balance[] memory balances = new Balance[](tokenContractAddresses.length);
        for(uint i =0; i < tokenContractAddresses.length; i++) {
            uint balance = Token(tokenContractAddresses[i]).balanceOf(walletAddress);
            balances[i] = Balance(tokenContractAddresses[i],balance);
        }

        return balances;

    }
}
