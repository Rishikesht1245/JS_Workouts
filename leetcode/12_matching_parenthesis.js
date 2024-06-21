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

    const stack = [];
    
   
    for(let i =0; i < s.length; i++){
        
        if(braces[s[i]]){
        
            stack.push(s[i]);
        
        }else if(braces[stack.pop()] !== s[i]){
            
            return false

        }
    }
    return stack.length === 0;
    
};

console.log(isValid("({})]"))