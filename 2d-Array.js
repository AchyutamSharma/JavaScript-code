let array2D = [
    ["Achyutam sharma", 23, 45000],
    ["Roshan Barnwal", 24, 35000],
    ["Akshit Darad",23, 50000],
    ["Bhupendar Jogi", 26, 60000],
    ["Ayush Raj", 23 ,36000],
];

// This is for print all Array one by one.
  
for(let i =0;i < array2D.length;i++){
    console.log(array2D[i]);    
}

console.log(`The first person name is ${array2D[0][0]} 
Age of ${array2D[0][0]} is ${array2D[0][1]} 
Salery of ${array2D[0][0]} is ${array2D[0][2]}
${array2D[3][0]} salery is ${array2D[3][2]}
`);

// lets add some new value in array2D

array2D[0][3] = 'Jharkhand';
array2D[1][3] = 'West Bengal';
array2D[2][3] = 'Jharkhand';
array2D[3][3] = 'Karnataka';

console.log("Form here it show the New Value");

for(let i =0;i < array2D.length;i++){
    console.log(array2D[i]);    
}