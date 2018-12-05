const division = require('./divisibleBy3And5');

test('divisible by 3', () => {
    expect(division(3)).toBe('Fizz');
  });

test('divisible by 5', () => {
  expect(division(5)).toBe('Buzz');
});

test('divisible by 3 and 5', () => {
  expect(division(15)).toBe('FizzBuzz');
});
