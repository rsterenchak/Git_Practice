import calculator from "./calculator.js"

test('adds 1 + 2 to equal 3', () => {
  const myObjectInstance = new calculator();
  expect(myObjectInstance.add(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  const myObjectInstance = new calculator();
  expect(myObjectInstance.subtract(2, 1)).toBe(1);
});

test('adds 1 + 2 to equal 3', () => {
  const myObjectInstance = new calculator();
  expect(myObjectInstance.multiply(1, 2)).toBe(2);
});

test('adds 1 + 2 to equal 3', () => {
  const myObjectInstance = new calculator();
  expect(myObjectInstance.divide(4, 2)).toBe(2);
});