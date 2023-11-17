/*gave your robot $10 and a bottle of milk costs $1.5, you should be able to modify your function to calculate 
how many bottles of milk the robot is able to buy based on the amount ofmoney that you gave the robot.
So you should be able to say something like getMilk, maybe $5, and if one bottle of milk is say
$1.5, then that should mean that your robot should be able to buy 5 divide by 1.5 which equals
3.33, so it won't be able to buy a 0.3 bottle. Nobody's going to let it slash a bottle of milk into a third, 
but it will be able to buy 3 bottles of milk back.  */



/*
function getMilk() {
    var bottle = 5;
    var youWants = prompt("How much Money do you Have?");
    var total = youWants / bottle ;
    alert("You got only " + Math.trunc(total) + " bottles.");
}
getMilk();
*/

/*
function getMilks(bottles) {
    var cost = bottles * 15;
    alert("Total number of bottles :- " + bottles + "\n Total Cost of bottles :- $" + cost );
}

getMilks(2);
*/




function getMilk(money, costPerBottle){
    console.log("Buy " + calBottel(money, costPerBottle) + " bottle of milk.");

    return calChange(money, costPerBottle);
}

function calBottel(startingMoney, costPerBottle){
    var numberOfBottle = Math.floor(startingMoney/costPerBottle);
    
    return numberOfBottle;
}
function calChange(startingAmount, costPerBottle){
    var change =  startingAmount % costPerBottle;

    return change;
    
}
console.log("Hello Master here is your change " + getMilk(5, 1.5) + " change." )