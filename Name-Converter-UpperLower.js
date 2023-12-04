/*
name = "Achyutam";
name1 = name.toUpperCase();
name2 = name.toLowerCase();
console.log("End here !!");  

let name = prompt("What is your name");
alert("Hello " + name.toUpperCase());
alert(name1);
alert(name2);
*/

// 1 create a var that store the name that user enter via prompt.
var name = prompt("What is your name");

// 2 capitalise the first latter of their name.
// a isolate the first character
var firstChar = name.slice(0,1);

// b turn the first character to UpperCase
var firstUpper = firstChar.toUpperCase();

// c isolate the remaining character
var secondChar = name.slice(1,name.length);

// d turn the secondChar to LowerCase 
var secondChartoLower = secondChar.toLowerCase();


var capitaliseName = firstUpper + secondChartoLower;

alert("Hello " + capitaliseName);
