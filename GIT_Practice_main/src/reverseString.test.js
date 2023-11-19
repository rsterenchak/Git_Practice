const reverseString = require('./reverseString');

test('takes string and returns in reverse order', () => {
  expect(reverseString('yup')).toBe('puy');
});