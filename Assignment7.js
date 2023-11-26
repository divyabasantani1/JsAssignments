//Write a JavaScript function that takes a string as a parameter and counts the number of vowels
//(a, e, i, o, u) in the string.


let vowels = ["a", "e", "i", "o", "u"]

function countVowel(string) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of string.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
let string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

