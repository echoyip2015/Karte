
class Util {

    static defaultEqual(a, b) {
        return a === b;
    }

    static defaultCompare(a, b) {
        if (a < b) {
            return -1;
        } else if (a === b) {
            return 0;
        }
        return 1;
    }

    static isFunction(func) {
        return (typeof func) === 'function';
    }

    static isUnfefined(obj) {
        return obj === undefined;
    }

    static isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    }
}


export default Util;