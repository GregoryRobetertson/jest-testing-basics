# jest-testing-basics

# Utility Functions Testing with Jest

This repository contains utility functions along with Jest tests to ensure their correctness.

## Setup Process

1. **Install Jest**:
   - Ensure you have Node.js and npm installed on your machine.
   - Install Jest globally using npm:
     ```
     npm install -g jest
     ```

2. **Clone the Repository**:
   - Clone this repository to your local machine:
     ```
     git clone https://github.com/yourusername/your-repo.git
     ```

3. **Navigate to Repository Directory**:
   - Change your current directory to the cloned repository:
     ```
     cd your-repo
     ```

4. **Install Dependencies**:
   - Install the necessary dependencies using npm:
     ```
     npm install
     ```

## Running Tests

To run the tests, execute the following command in your terminal:

## npm test
This will run all the tests defined in the `utils.test.js` file using Jest.

## Utility Functions and Tests

### multiply Function

The `multiply` function takes two numbers as arguments and returns their product.

#### Tests for multiply Function

- Test Case 1: Checks if multiply function returns the correct product of two positive numbers.
- Test Case 2: Checks if multiply function returns the correct product of a positive and a negative number.
- Test Case 3: Checks if multiply function returns the correct product of two negative numbers.

### isPrime Function

The `isPrime` function takes a number as an argument and returns true if the number is prime, otherwise returns false.

#### Tests for isPrime Function

- Test Case 1: Checks if isPrime function correctly identifies prime numbers.
- Test Case 2: Checks if isPrime function correctly identifies non-prime numbers.
- Test Case 3: Checks if isPrime function correctly handles negative numbers.
