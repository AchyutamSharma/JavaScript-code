// we are useing Math.random

/*
    alert("Welcome to Love Calculator Website.");
    var x = prompt("Write 1st Person Name....");
    var y = prompt("Write 2nd Person Name....");
    var n = Math.random();
    n = n * 100;
    n = Math.floor(n) + 1;
    alert("Your Love Percentage is " + n + "%.");
*/


    alert("Welcome to Love Calculator Website.");
    var firstPerson = prompt("Write 1st Person Name....");
    var secondPerson = prompt("Write 2nd Person Name....");
    var LoveValue = Math.random() * 100;
    LoveValue = Math.floor(LoveValue) + 1;

    if (LoveValue >= 80) {
        alert("Your Love Percentage is " + LoveValue + "%. " + firstPerson + " is Best Match for " + secondPerson + ".");
    }
    else if(LoveValue >= 60){
        alert("Your Love Percentage is " + LoveValue + "%. " + firstPerson + " is Normal Match for " + secondPerson + ".");
    }
    else{
        alert("Your Love Percentage is " + LoveValue + "%. " + firstPerson + " is Wrost Match for " + secondPerson + ".");
    }
