//Write a JavaScript function that takes a positive integer as a parameter and prints its
//multiplication table up to 10.

function print_table(n) 
{

    for (let i = 1; i <= 10; ++i)
        console.log(n + " * " + i +
            " = " + n * i);
}
print_table(5)