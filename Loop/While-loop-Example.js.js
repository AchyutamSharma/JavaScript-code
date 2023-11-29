
var count = 100;
function songs() {
    

while(count >= 0) {
    
if (count != 0) {
console.log(count + " bottle of beer on the wall, " + count + " bottle of beer. Take 1 down, pass it around, " + (count-1) + " bottle of beer on the wall. ");       
} else {
 console.log("No more bottle of beer on the wall, no more bottle of the beer. Go to the store and buy some more beer, 99 beer on the wall.");   
}
count--;
}}
console.log(songs());

/*

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    
    console.log("Take one down, pass it around,");
    
	numberOfBottles--;
    
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
*/

