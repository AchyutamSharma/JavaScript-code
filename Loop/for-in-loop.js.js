/*
Q- when we use for-in-loop?
Ans :- when we need to know how many keys inside the Object. 
*/
    
/*
console.log("It print only Keys : ");
let students = {
    Name: "Achyutam Sharma",
    Age: 20,
    Cgpa: 8.01,
    Pass: true,
    Batch: 2020,
};

for (let i in students){
        console.log(i);
}
*/

console.log("It print Keys :  & There Value : ");
let students = {
    Name: "Achyutam Sharma",
    Age: 20,
    Cgpa: 8.01,
    Pass: true,
    Batch: 2020,
};

for (let keys in students){
        console.log("Key = ", keys, "Value = ", students[keys]);
}
