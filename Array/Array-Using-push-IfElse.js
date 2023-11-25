/* array example 
FizzBuzz problem using .push Method.
those number which is divisible by 3 & 5, if divided by 3 then print 'fizz' and divided by 5 print 'buzz'
if divided by both print 'fizzBuzz'. 

/*
var output = [];
var count = 1;

function  fizzBuzz(){    
    output.push(count);
    count++;
    
    console.log(output); 
}
*/


var output = [];
var count = 1;

function  fizzBuzz(){  
    if (count % 3 === 0 && count % 5 === 0) {
     output.push('FizzBuzz');
    count++;   
    }else if (count % 3 === 0) {
     output.push('fizz');
    count++;   
    } else if (count % 5 === 0) {
     output.push('buzz');
     count++;
    } else {
    output.push(count);
    count++;    
    }
      
    console.log(output); 
}
