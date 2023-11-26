//Write a JavaScript function that takes a positive integer as a parameter and calculates its
//factorial using a for loop. The factorial of a number N is the product of all positive integers less
//than or equal to N.

function factorial(num) 
{
  
    for (let i = num - 1; i >= 1; i--) {
     num *= i;
    
    console.log(num);
    }
    
    
  }
 factorial(3);
