// solving the functionality of promise.all without using promise.all (built in)

function promiseAll(functions) {
    if(!Array.isArray(functions)) return null;

  return new Promise((resolve, reject) => {
    const results = new Array(functions?.length);
    let count = 0;

    functions.forEach((func, i) => {
        func()
        .then(res => {
            console.log({ifor : i})
            // results[i] accesses the i that was captured during the iteration's callback creation (from the closure)
            results[i] = res;
            count++;
            
            // here we need to add the count variable, since there is possiblity for the first function to resolve last and last function to resolve first 
            // so the condition will fails if we add i as the compare value.
            if(count === functions?.length){
                console.log({count, i});
                resolve(results);
            } 
        })
        .catch(err => reject(err));
    });
  });


    
};


const promise = promiseAll([() => new Promise(res => res(42)), () => new Promise(res => setTimeout(() => res(52), 300)), () => new Promise(res => res(62))]);
 promise.then(console.log); // [42]
