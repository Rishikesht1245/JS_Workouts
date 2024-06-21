/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const braces = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    };
    
    let isMatch = false;
    for(let i =0; i < s.length; i+=2){
        if(braces[s[i]] !== s[i+1]){
        
            return isMatch = false;
        }else{
            
        isMatch = true;
        }
    }
    return isMatch;
    
};

console.log(isValid("()"))