/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const sortedArray = [...nums1, ...nums2].sort((a,b) => a-b);
    const length = sortedArray.length;
    let median;
    if(length % 2 === 1){
        median = sortedArray[((length+1)/2) - 1]
    }else {
        median = (sortedArray[(length/2 -1)] + sortedArray[(length/2) ])/2;
    }

    return median;
};

const nums1 = [1, 2,7];
const nums2 = [4,5];

const med = findMedianSortedArrays(nums1, nums2);
console.log(med);