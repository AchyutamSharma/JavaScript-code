/*
write a function which will select a random name from a list of names. 
The person selected will have to pay for everybody's food bill.

*/

/*
function whoeats(names) {

    var array = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var randomName = Math.floor(Math.random() * array.length);
    var names = array[randomName];
    
    return names
}
*/

// after understand 

function leEat(){
    var names = ["Angela", "Ben", "Jenny", "Yashansh", "Shivam", "Achyutam"];
    var guess =  Math.floor(Math.random() * names.length);
    var finalOne = names[guess];

    alert("Hey! " + finalOne + "\n You pay the food of your Friend.");
}

console.log(leEat());

