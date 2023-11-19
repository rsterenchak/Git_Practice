import calculator from "./calculator.js"

test('adds 1 + 2 to equal 3', () => {
    expect(new calculator(1,2)).toBe('3');
  });