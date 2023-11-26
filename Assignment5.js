//Write a JavaScript function that takes a positive integer as a parameter and prints all the prime
//numbers less than or equal to that integer. A prime number is a natural number greater than 1
//that is not a product of two smaller natural numbers.

function Check_prime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(Check_prime(5));
