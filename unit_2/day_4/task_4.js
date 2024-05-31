//4. Write a JavaScript program to count the number of arrays inside a given array

function countOfArr(arr){
      let count = 0;
    arr.filter((elem) => {
      if(Array.isArray(elem)){ // checking if the element inside the array is array or not
            count++;
      }
     });
     console.log(count);
}

countOfArr([2,3,[4],[6,7],9]);