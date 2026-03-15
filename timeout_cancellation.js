/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const timer = setTimeout(() => {
        fn(...args);
    }, t);

 
    return function cancelFn() {
        console.log("cancelado")
        clearTimeout(timer);
    };
};


const miFuncion = (x) => console.log(x + 2);

const misArgs = [2]; 

const cancel = cancellable(miFuncion, misArgs, 5000);

cancel()