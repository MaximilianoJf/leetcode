/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (number) => {
            if(val === number){
                return val === number
            }else{
                throw new Error("Not Equal")
            }
           
        },
        notToBe: (number) => {
            return val !== number
        },

    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */