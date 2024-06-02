/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTHolder = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_pokeName, _spriteColor, _pokeType, _sigMove) {
    const NFT = {
        "pokeName": _pokeName,
        "spriteColor": _spriteColor,
        "pokeType": _pokeType,
        "sigMove": _sigMove
    }
    NFTHolder.push(NFT);
    console.log("Minted: "+ _pokeName);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFTHolder.length; ++i){
        console.log();
        console.log("Pokemon Name: \t\t" + NFTHolder[i].pokeName);
        console.log("Sprite Color: \t\t" + NFTHolder[i].spriteColor);
        console.log("Pokemon Type: \t\t" + NFTHolder[i].pokeType);
        console.log("Signature Move: \t" + NFTHolder[i].sigMove);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number NFTs held: "+NFTHolder.length);
}

// call your functions below this line

mintNFT("Pikachu", "Yellow", "Electric", "Thunderbolt");
mintNFT("Charmander", "Orange", "Fire", "Flamethrower");
mintNFT("Squirtle", "BLue", "Water", "Water Gun");
listNFTs();
getTotalSupply();
