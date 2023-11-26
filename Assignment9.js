//Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series
//up to that number. The Fibonacci series is a sequence of numbers in which each number is the
//sum of the two preceding ones.


function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
 
console.log("Fibonacci(5): " + fibonacci(5));
