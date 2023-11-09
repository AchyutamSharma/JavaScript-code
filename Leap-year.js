function isLeap(year){

    var year = prompt("Give the year, we can find it is leap year or not.");

    if (year % 4 === 0){
        if (year % 100 === 0){ // Year % 100 is not a leap year.
            if (year % 400 === 0){
                alert("Leap year");
            } else {
                alert("Not Leap year");        
            }
        } else {
            alert("Leap year");
        }
    } else {
        alert("Not Leap year");
    }
    return year;
}
console.log(isLeap());

/*

                    This code was copy from Udemy Cmt

function isLeap(year) 
{
    if (year % 4 !==0 || year % 100 === 0 && year % 400 !== 0) {
            console.log("Not leap year.");
    } else {
            console.log("Leap year.");
    }
}
isLeap(1998);
*/



/*
            This is my code

function isLeap(year){
    var year = prompt("You want to chech Which Year is leap Year?");
    var year = parseInt(year);

    if (year % 4 === 0) {
        alert(year + " is leap Year.");
    } else if (year % 100 === 0) {
        alert(year + " is not a leap Year.");
    }else if (year % 400 === 0) {
        alert(year + " is leap Year.");
    }else{
        alert(year + " is not a leap Year.");
    }
    return year;
}
console.log(isLeap());
*/
