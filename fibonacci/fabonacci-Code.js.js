/*
var output = [];
function fibo(n) {
    var a = -1, b = 1, c = 0;
    
    for (let index = 0; index < n; index++) {        
        c = a + b;
        output.push(c); 
        a = b;
        b = c;     
    }
    console.log(output);

     return n;
}
*/

//var output = [];
function fibo(n) {
    var a = 0, b = 1, c = 0;
    
    for (let index = 0; index < n; index++) {        
        if (n === 1) {
            output = [0];
        } else if(n === 2) {
            output = [0,1];   
        } else{
      var output = [0,1];      
        c = a + b;
        a = b;
        b = c;     
        
    
    output.push(c); 
    }}
    console.log(output);

     return n;
}

