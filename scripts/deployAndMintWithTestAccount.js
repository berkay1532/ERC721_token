const hre = require('hardhat');
require("dotenv").config()
const testWallet = process.env.TEST_WALLET_ACCOUNT;
const uri = process.env.YTU_BLOCKCHAIN_NFT_URI;

async function main(){
    //Get the contract deploy
    const YtuToken = await hre.ethers.getContractFactory("YtuToken");
    const ytuToken = await YtuToken.deploy();
    await ytuToken.deployed();
    console.log("YtuToken deployed to ",ytuToken.address);

    //Check test address
    console.log("Test wallet: ",testWallet);


    //Mint 
    await ytuToken.safeMint(testWallet,uri);
    console.log("Minted by ",testWallet);
}

//Handling errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
