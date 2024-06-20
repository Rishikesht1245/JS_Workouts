/* @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let LCP = strs[0];
    let i = 1;

    while(i<strs.length){
        if(!strs[i].startsWith(LCP)){
            LCP = LCP.slice(0,-1);
        }else {
            i++;
        }
    }
};  return LCP;