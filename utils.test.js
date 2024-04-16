const { multiply, isPrime} = require('./utils');

describe('multiply, function', () => {
it('Should multiply to positive numbers correctly', () => {
    expect(multiply(2,3)).toBe(6);
})
})

describe('isPrime, function', () => {
    it('Correctly identifies prime numbers', () => {
expect(isPrime(2)).toBe(true);
expect(isPrime(3)).toBe(true);
expect(isPrime(5)).toBe(true);
expect(isPrime(7)).toBe(true);
expect(isPrime(11)).toBe(true);
    })
    it('correctly identifies non-prime numbers', () => {
        expect(isPrime(4)).toBe(false);
        expect(isPrime(6)).toBe(false);
        expect(isPrime(8)).toBe(false);
        expect(isPrime(9)).toBe(false);
        expect(isPrime(10)).toBe(false);
    });

    it('correctly handles negative numbers', () => {
        expect(isPrime(-1)).toBe(false);
        expect(isPrime(-2)).toBe(false);
        expect(isPrime(-3)).toBe(false);
        expect(isPrime(-4)).toBe(false);
        expect(isPrime(-5)).toBe(false);
    });
})

