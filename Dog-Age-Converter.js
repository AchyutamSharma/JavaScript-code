// Dog Age convert to Human Age.
//this is dog age converter code

alert("Welcome to Our Website!! \n  This website is use for calculate the Dog Age to Human Age.");
// this prompt is insert user Name
var humanName = prompt("Whats your Name?");

var upperfrist = humanName.slice(0,1); // this line is slice your 1st alphabet and change into upper-case in the next line.
var firstHumanName = upperfrist.toUpperCase();

var lowerName = humanName.slice(1,humanName.length); // this line is slice your after 1st to rest of alphabet and change into Lowwer-case in the next line. 
var lastName = lowerName.toLowerCase();

var FullHumanName = firstHumanName + lastName; // it add upper and lower case together 

alert("Hello " + FullHumanName + " \n Let's Start the calculation. "); // This line show your Name (1st alphabet in uppercase and rest of alphabet in lower case { like : Achyutam})
// line no. 3 to 15 is name converter.

var ageofDog = prompt("Whats your Dog Age?"); // This line is take your Dog Age.

var HumanAge = (ageofDog - 2) * 4 + 21; // Calculate the Dog Age, this is the formula.
alert("Hey!! \n " + FullHumanName +" Your Answer is " + HumanAge); // this line give the dog age.
// Example :- Hey!! Achyutam Your Answer is (Age Number)
 
