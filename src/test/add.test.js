// Import the function to test

const add = require('./function/add');

// Test case: Test the add function
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
