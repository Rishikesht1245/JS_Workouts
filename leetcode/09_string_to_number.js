/* Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result. */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const MIN_INT = -(2 ** 31);
    const MAX_INT = 2 ** 31 - 1;
    // parse int will remove leading spaces and trailing letters
    // if there is leading letters then it will return NAN
    // _ and symbols are also considered as string
    let num = parseInt(s);
    console.log(num);
    if (num){

    if(num <= MIN_INT) return MIN_INT;
    else if(num > MAX_INT) return MAX_INT;
    else return num;
    }
    return 0;
};

const str = " __-123 a"
console.log(myAtoi(str), "===number") // -123