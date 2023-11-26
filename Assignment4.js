//Write a JavaScript function that takes a string as a parameter and determines whether it's a
//palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters
//that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).



function checkPalindrome(string) {

let len = string.length;
    for (let i = 0; i < len / 2; i++){
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
let string = prompt('Enter a string: ');
let value = checkPalindrome(string);

console.log(value);