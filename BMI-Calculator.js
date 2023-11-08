function bmiCalculator(weight,height){
  var weight = prompt("What is your Weight.");
  var height = prompt("What is your Height in metre.");
  
  var bmi = (weight / Math.pow(height,2)).toFixed(1);
  if(bmi < 18.5){
    alert("Your BMI is " + bmi + ", According to BMI you are in list of Under-Weight.");
  }
  else if (bmi >= 18.5 && bmi <= 24.9){
    alert("Your BMI is " + bmi + ", According to BMI your Weight is Normal.");
  }
  else if (bmi >= 25 && bmi <= 29.9){
      alert("Your BMI is " + bmi + ", According to BMI you are in list of Over-Weight .");
    }
  else if (bmi >= 30 && bmi <= 34.9){
      alert("Your BMI is " + bmi + ", According to BMI you are in list of OBESE .");
    }
  else if (bmi >= 35){
    alert("Your BMI is " + bmi + ", According to BMI you are in list of Extremely OBESE .");
  }

  return bmi;
}
console.log(bmiCalculator());




// this code is for udemy test and return is compulsory for output to the computer.

/*
function bmiCalculator(weight, height) {
    var interpretation = (weight / Math.pow(height,2));
    interpretation = Math.round(interpretation);

    if (interpretation < 18.5) {
       return "Your BMI is " + interpretation + ", so you are underweight.";
    } else if (interpretation > 18.5 && interpretation < 24.9) {
      return "Your BMI is " + interpretation + ", so you have a normal weight.";
    } else if (interpretation > 24.9) {
      return "Your BMI is "+ interpretation + ", so you are overweight.";
    } 
    return interpretation;
}
*/
