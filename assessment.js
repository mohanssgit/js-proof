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
function mintNFT (_starName, _starColor, _starType, _starPos) {
    const NFT = {
        "starName": _starName,
        "starColor": _starColor,
        "starType": _starType,
        "starPos": _starPos
    }
    NFTHolder.push(NFT);
    console.log("Minted: "+ _starName);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFTHolder.length; ++i){
        console.log();
        console.log("Name: \t\t" + NFTHolder[i].starName);
        console.log("Team Color: \t\t" + NFTHolder[i].starColor);
        console.log("Type: \t\t" + NFTHolder[i].starType);
        console.log("Position: \t" + NFTHolder[i].starPos);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number NFTs held: "+NFTHolder.length);
}
// call your functions below this line
mintNFT("James", "Grey", "Player", "Center");
mintNFT("Stephen", "Orange", "Benched", "PG");
mintNFT("Antman", "Blue", "Extras", "Mid");
listNFTs();
getTotalSupply();
