/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

// a function which accepts a function as parameter and returns another function is called HOC
var debounce = function(fn, t) {
    let timerRef;
    return function(...args) {
        if(timerRef){
            clearTimeout(timerRef);
        }
        timerRef = setTimeout(() => fn(...args), t)
    }
};

// log contains the retuned function from the debounce function;
const log = debounce(console.log, 100);
 log('Hello'); // cancelled
 log('Hello'); // cancelled
 log('Hello'); // Logged at t=100ms