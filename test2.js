const hre = require('hardhat');
require("dotenv").config()


async function main(){
    //Get the contract deploy
    console.log(process.env.TEST_WALLET_ACCOUNT);

}

//Handling errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
