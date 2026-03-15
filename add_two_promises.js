/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const valueOne = await promise1
    const valueTwo = await promise2

    return valueOne + valueTwo
};

var addTwoPromises = function(promise1, promise2) {
    return new Promise((resolve) => {
        promise1.then((val1) => {
            promise2.then((val2) => {
                resolve(val1 + val2);
            });
        });
    });
};

var addTwoPromises = async function(promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2]);
    return val1 + val2;
};

