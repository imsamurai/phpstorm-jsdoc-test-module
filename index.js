/**
 * @memberOf module:Abc
 */
class A {

    /**
     *
     * @param {number} x
     * @return {Promise<number>}
     */
    async someAMethod(x) {
        return x+42;
    }
}

module.exports = A;
