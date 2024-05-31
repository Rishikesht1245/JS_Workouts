/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value 
to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MIN_INT = -(2 ** 31);
    const MAX_INT = 2 ** 31 - 1;

    let str = x.toString();
    let reversedStr = str.split("").reverse().join("");

    if (x < 0) {
        // add - symbol and remove - symbol at the right
        reversedStr = '-' + reversedStr.slice(0, -1);
    }

    let rev = parseInt(reversedStr);

    if (rev < MIN_INT || rev > MAX_INT) {
        return 0;
    }

    return rev;
};

const num = -123;
const rev = reverse(num);

console.log(rev, "===rev");
