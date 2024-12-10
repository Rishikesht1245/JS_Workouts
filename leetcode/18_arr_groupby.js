Array.prototype.groupBy = function(fn) {
    const result ={};

    for(let i =0; i< this.length; i++){
        // function will return the key to store in object
        const key = fn(this[i]);
        if(!result[key]){
            result[key] = [];
        }

        result[key].push(this[i]);
    }

    console.log({result})
    return result;
};

 [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}