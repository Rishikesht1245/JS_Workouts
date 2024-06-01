/* You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

  */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length === 2) return Math.min(height[0], height[1]) * 1;

    let result = 0;
    /* COMPLEXITY n^2 not accepted*/
    // for(let i =0; i< height.length; i++){
    //     for(let j=i+1; j<height.length; j++){
    //         let area = Math.min(height[i], height[j]) * (j-i);
    //         result = Math.max(result, area);
    //     }
    // }
    return result
};