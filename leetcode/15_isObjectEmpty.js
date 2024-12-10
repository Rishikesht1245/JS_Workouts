function isEmpty(obj) {
    // if(typeof obj === "object" && !Array.isArray(obj)){
    //     if(Object.keys(obj)?.length === 0){
    //         return true;
    //     }
    // }else if(Array.isArray(obj)){
    //     if(obj?.length === 0){
    //         return true;
    //     }
    // }
    // return false;

    // shorter way : type of array is object, on an arrya we can access the method Object.entries();
    return Object.entries(obj).length === 0;
};

console.log(isEmpty({name : "rishi"}), "non object");
console.log(isEmpty([]), "empty arr");
console.log(isEmpty([1,2]), "non empty arr");