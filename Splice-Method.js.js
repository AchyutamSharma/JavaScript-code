/*
Example 1:-

let num = [10,35,65,75,95,105];
console.log(`Array Before Splice, Array length = ${num.length}, Array : ${num}`)
let deletedvalue = num.splice(1, 2, 102, 103, 104);
// 1 is a started position  
// 2 is a how many I want delete 
// "102, 103, 104" :- I want add these numbers  
console.log(`Array After Splice, Array length = ${num.length}, Array : ${num}`);
*/

/*
Example 2:-
let MarvelHero = ["Thor","Loki","SpiderMan","IronMan"];
console.log(`Array Before Splice:- 
No. of length : ${MarvelHero.length} 
Array are : ${MarvelHero}`);
let deletedvalue = MarvelHero.splice( 2, 0, "Hawkeye","Black Panther","Captain America");
console.log(`Array After Splice :-
No. of length : ${MarvelHero.length}
Array are : ${MarvelHero}`);
 
// 0 deleted from 2 and add this 
*/

/*
let items = [1,2,3,4,5,6,7];

        // Add Element 
items.splice(2,0,201);
console.log(items); // output:- (8) [1, 2, 201, 3, 4, 5, 6, 7]


        // Delete Element 
items.splice(2,1);
console.log(items); // output:- (6) [1, 2, 4, 5, 6, 7]


        // Replace Element 
items.splice(2,1,201);
console.log(items); // output:- (7) [1, 2, 201, 4, 5, 6, 7]
*/

/*
Q11:- Create an array to store companies -> ["Bloomberg","MicroSoft","Uber","Google","IBM","Netflix"]
        a)- Remove the first company from the array 
        b)- Remove  Uber & Add "Ola" in its place 
        c)- Add "Amazon" at the end 

*/

let companies = ["Bloomberg","MicroSoft","Uber","Google","IBM","Netflix"];
let A = companies.splice(0,1); //we can also use .shift() Method
console.log(companies);

let compania = ["Bloomberg","MicroSoft","Uber","Google","IBM","Netflix"];
let B = compania.splice(2, 1,"Ola"); 
console.log(compania);
   
let combanikal = ["Bloomberg","MicroSoft","Uber","Google","IBM","Netflix"];
let C = combanikal.splice(6,0,"Amazon"); //we can also use .push() Method.
console.log(combanikal);
