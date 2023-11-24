/*
Example 1 :-

let firstName = 'Achyutam Sharma';
let age = 22;

console.log(`My Name is ${firstName} 
          and I am ${age} old. `);

*/

/*
Example 2 :-    



let obj = {
          Name : "Achyutam",
          age: 22,
          Course: 'BCA',
          
}

let output = `Hey!! \n My Name is ${obj.Name} and I'm ${obj.age} year old ,I was completed ${obj.Course} .`;
console.log(output);
let specialSting = `Hey we can add this type of String literals : 1+2+3 = ${1+2+3}. `;
console.log(specialSting);

*/


                                        /*  String Methods  */
/* 
1.  .trim() Methods :- trim() is use for removing the whitespaces from starting and ending point of the variable Value 
2.  .slice(start,end) Method :-  its slice/cut  the Value from the any where (returns part of string).
3.  .concat() :- it join/add two strings.
4.  .replace(searchVal,newVal) :- it replace the charater.
5.  .charAt(idx) :- when we need to charAt(index) me kya hai
*/


/*
1.  .trim() Methods :-

let tryTrim = `      Lets  try to print all this line    `; 
console.log(tryTrim);
let thisTime = `      Lets  try to print all this line    `; // use .trim()
console.log(thisTime.trim());
*/

/*
2.  .slice(start,end) Method :-

let str1 = "hello";
let newstr = str1.slice(0,4); // we slice 'hello' to 'hell'.
let afterThat = newstr.replace("ll","lp");  // we replace the 'll' to 'lp'.
console.log(`we slice this ${newstr}. After that we can add this ${afterThat} `);
*/


/*
3.  .concat() :-


let Name = "Achyutam ";
let Surname = "Sharma";
let alsoThis = Name + Surname;
console.log(alsoThis);
let FullName = Name.concat(Surname);   
 console.log(FullName);

*/ 


/*
4.  .replace(searchVal,newVal) :-

let str1 = "hello";
let newstr = str1.slice(0,4);
let afterThat = newstr.replace("ll","lp");
console.log(`we slice this ${newstr}. After that we can add this ${afterThat} `);

*/

/*
5.  .charAt(idx) :- 


let str = 'IloveJS';
console.log(str.charAt(5));

*/












