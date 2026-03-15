/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

type MiFuncion = (...args: any[]) => any;

type sortType = {
    arr: [],
    fn: MiFuncion
}

var sortBy = function({arr, fn}:sortType):any[] {
    return arr.sort((a,b) => fn(a) - fn(b))
};
