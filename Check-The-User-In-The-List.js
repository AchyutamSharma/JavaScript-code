// check the user is inside the array or not, if it is there then print welcom.

/*
function arrayPerson(){
    let personName = [ "Achyutam", "Yashansh", "Ashish", "Roshan"];
    let userName = prompt("What is yor Name.");

    if (userName == "Achyutam") {
        alert("Welcome");
    } else if (userName == "Yashansh") {
        alert("Welcome");
    }else if (userName == "Ashish") {
        alert("Welcome");
    }else if (userName == "Roshan") {
        alert("Welcome");
    }else{
        alert("You Need to Sign-Up.");
    }
    
}
console.log(arrayPerson());
*/

var guestName = ["Achyutam","Shubam", "Ashish", "Akshit", "Saitan"];
var enterName = prompt("Enter your Name?");
if (guestName.includes(enterName)) {
    alert("welcome");
} else {
    alert("No bro");
}
