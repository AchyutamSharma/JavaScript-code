/*
let marks = [19,35,95,65,77,46];
console.log(marks);
// you can also change marks[0] from the console like marks[0] = 26;
// marks[26,35,95,65,77,46];

*/
                /* looping Over an Array */
                      /* for loop */
/*
let customer = ["Pappu","Nawab","Mahadev","Yashansh","Ajay","Sunita","Pamme","Pinky","Raynu","kanchan"];
console.log("Ashish sir, \n Here is the list of Staff.");
for (let index = 0; index < customer.length; index++) {
        console.log(customer[index]);
}
*/

  
                    /*Example of : for-of loop */

/*   
Ex1:-

let customer = ["Pappu","Nawab","Mahadev","Yashansh","Ajay","Sunita","Pamme","Pinky","Raynu","kanchan"];
console.log("Ashish sir, \n Here is the list of Staff.");
for (let staffName of customer) {
    console.log(staffName);
}
*/

/*
Ex1:-
*/

  let cities = ["delhi","mumbai","kolkata","noida","Bangalore","Hydrabad","Jaipur","chennai"];

    for (let city of cities) {
        console.log(city.toUpperCase());
    }
console.log(` ${cities.length} City are the top listed City in Bharat.`);
