function mergeSort(unsortedArr){
      if(unsortedArr.length < 2){
            return unsortedArr;
      }

      let mid = Math.floor(unsortedArr.length/2);
      let leftArr = unsortedArr.slice(0,mid);
      let rightArr = unsortedArr.slice(mid);

      // recursively calling the same function to split the array until the one element.
      let sortedLeftArr = mergeSort(leftArr);
      let sortedRightArr = mergeSort(rightArr);

// call the merge function to sort and merge,it will be called on each function execution context and return the sorted merged sub array.
      return merge(sortedLeftArr, sortedRightArr);

}


// function for merging and sorting

function merge(leftHalf , rightHalf){
      let sortedArr = [];
      //checking the value is positive 
      while(leftHalf.length && rightHalf.length){
            if(leftHalf[0] < rightHalf[0]){
                  // shift will remove the first element from the array and return it.
                  sortedArr.push(leftHalf.shift());  
            }
            else{
                  sortedArr.push(rightHalf.shift());
            }
      }

      return [...sortedArr, ...leftHalf, ...rightHalf];  // will do merging of sorted array + remaining elements in the left and right halfs
}


let arr = [23, 45, 12, 10, 56, 32];
console.log(mergeSort(arr));