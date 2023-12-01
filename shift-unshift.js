/*
    .pop()/.shift() :- it return some value 
*/
let fruits = ["A", "B", "C"]


let deleted = fruits.shift() // "A"
console.log(fruits) // ["B", "C"]
console.log(deleted);

fruits.shift() // "B"
console.log(fruits) // ["C"]

fruits.shift() // "C"
console.log(fruits) // []

fruits.shift() // undefined
console.log(fruits) // []


/*
let numbers = [2,3,4]
numbers.unshift(9)

console.log(numbers) // [1,2,3,4]
*/

/*
let letters = ["b","c","d","e"]
console.log(letters.length) // 4

let newLength = letters.unshift("a")
console.log(newLength) // 5
console.log(letters) // ["a","b","c","d", "e"]
console.log(letters.length) // 5

*/