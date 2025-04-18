export default class ExLib {
    /**
     * convert input data to String
     * @param {Array} input - if input is Array
     */
    static toString(input) {
        if (Array.isArray(input))
            return input.reduce((acc, curr) => acc + (acc ? ', ' : '') + curr, '')
    }
}