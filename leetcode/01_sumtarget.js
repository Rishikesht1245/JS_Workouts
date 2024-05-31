/* Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target. You may assume that each input would have exactly one 
solution, and you may not use the same element twice. You can return the answer in any order.*/

/* SOL 1 : Using nested for loops */
const findTargets = (arr, target) => {
    for(let i = 0; i<arr.length; i++){
        for(let j =1; j<arr.length; j++){

            if(arr[i] + arr[j] === target){
                return [i, j];
            }
        }
    }
};

/* SOL 2 : Using hashmap */
const findTargetUsingHashMap = (arr, target) => {
    const indicesMap = {};
    for(let i=0; i<arr.length; i++){
        let compliment = target - arr[i];
        if(indicesMap.hasOwnProperty(compliment)){
            return [indicesMap[compliment], i]
        }

        indicesMap[arr[i]] = i;
    }
}

const array1 = [2,8,11, 7, 12]
// const targets = findTargets(array1, 9);
const targets = findTargetUsingHashMap(array1,9)
console.log(targets);