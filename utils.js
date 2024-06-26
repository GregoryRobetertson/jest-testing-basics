'use strict';

function multiply(a, b) {
    return a * b;
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

module.exports = { multiply, isPrime };