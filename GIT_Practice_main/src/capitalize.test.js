const capitalize = require('./capitalize');

test('capitalizes string', () => {
  expect(capitalize('yup')).toBe('Yup');
});