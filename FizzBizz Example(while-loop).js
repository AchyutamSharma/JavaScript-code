
var output = [];
var count = 1;

function  fizzBuzz(){  

    while (count <= 100) {
          
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
  }  
    console.log(output); 
}