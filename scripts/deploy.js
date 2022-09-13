const hre = require('hardhat');


async function main(){
    //Get the contract deploy
    const YtuToken = await hre.ethers.getContractFactory("YtuToken");
    const ytuToken = await YtuToken.deploy();
    await ytuToken.deployed();
    console.log("YtuToken deployed to ",ytuToken.address);

}

//Handling errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
