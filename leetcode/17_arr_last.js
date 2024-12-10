// adding custom method to the Array prototype

Array.prototype.last = function() {
    if(this.length === 0){
        return -1;
    }else{
        return this[this.length -1];
    }
};


 const arr = [null];
 const lastElement = arr.last(); // 3
 console.log({lastElement})
