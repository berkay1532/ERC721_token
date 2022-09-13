const hre = require('hardhat');
const uri = process.env.YTU_BLOCKCHAIN_NFT_URI;


async function getBalance(ytutoken,address){
    return ytuToken.connect(owner).balanceOf(address);;
}

async function printBalances(ytutoken,adresses){

    let idx = 0;
    for(const address of adresses){
        console.log(`Address ${idx} balance: `,await getBalance(ytutoken,address));
        idx++;
    }
}

async function main(){
    //Get accounts
    const [owner,minter1] = await hre.ethers.getSigners();

    //Get the contract deploy
    const YtuToken = await hre.ethers.getContractFactory("YtuToken");
    const ytuToken = await YtuToken.deploy();
    await ytuToken.deployed();
    console.log("YtuToken deployed to ",ytuToken.address);

    //Check balances before the mint
    console.log("==start==");
    console.log(await ytuToken.balanceOf(minter1.address));

    //Mint the NFT
    const tip = {value: hre.ethers.utils.parseEther("1")};
    await ytuToken.safeMint(minter1.address,uri);

    
    // //Check balance after the mint
    console.log("==after mint==");
    console.log(await ytuToken.balanceOf(minter1.address));

    //Check token uri
    console.log("Token uri: ",uri);
}

//Handling errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
