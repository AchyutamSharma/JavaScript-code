// Its show how much days-month-year you have left according to 90 age of any person.

function lifeInWeeks(age) {
    var days = ((90 - age) * 365); // days
    var week = ((90 - age) * 52);  // Weeks
    var months = ((90 - age) * 12);  // Months
    console.log("You have " + days +" days, " + week + "weeks, " + months + "months left.");
}
var manage = prompt("Whats your Age?");
lifeInWeeks(manage);

/*
function lifeInWeeks(age) {
var days = ((90 * 365) - (age * 365));
var week = ((90 * 52) - (age * 52));
var months = ((90 * 12) - (age * 12));
alert("You have " + days + " days, " + week + " week," + " and " + months + " months left." );
}
var manage = prompt("Whats your Age?");
lifeInWeeks(manage);
*/
