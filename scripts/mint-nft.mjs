const CONTRACT_ADDRESS = "0xf1698a7081E3283a9eE2F8d8Bc674C9401bC06DB"
const META_DATA_URL = "ipfs://bafyreihipucypq7kfabkzizuqoq6ccwawbpeucauxoqnm24mbm5vuaf74q"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });