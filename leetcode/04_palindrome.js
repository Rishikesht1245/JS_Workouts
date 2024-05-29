/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const palindrome = x.toString().split("").reverse().join("");

    let normal = x.toString();
    return normal === palindrome;
};