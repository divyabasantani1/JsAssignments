//Write a JavaScript function that takes a positive integer as a parameter and checks if it's a
//perfect number. A perfect number is a positive integer that is equal to the sum of its proper
//divisors, excluding itself.


function checkPerfectNum(number)
{
    let temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
checkPerfectNum(28);