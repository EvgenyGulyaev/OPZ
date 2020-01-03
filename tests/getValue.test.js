const opz = require('../index.js');

test('simple sum', () => {
  expect(opz.getValue('1 + 2')).toBe(3);
});

test('simple check sqrt value', () => {
  expect(opz.getValue('sqrt(4 + 1 + 5 * 2 - 8 + 9)')).toBe(4);
});

test('simple check sqrt value', () => {
  expect(opz.getValue('4 + sqrt(4 + 1 + 5 * 2 - 8 + 9)')).toBe(8);
});

test('simple check sqrt value + ^', () => {
  expect(opz.getValue('sqrt(4^4)')).toBe(16);
});

test('simple check blah-blah value', () => {
  expect(opz.getValue('sqrt(x^x)')).toBe(NaN);
});

test('simple check value X with X vars', () => {
  expect(opz.getValue('sqrt(x^x)', { x: 4 })).toBe(16);
});

test('simple check case-insensitivity', () => {
  expect(opz.getValue('sQrT(X^x)', { x: 4 })).toBe(16);
});

test('simple check error in sqrt op', () => {
  expect(opz.getValue('sQT(X^x)', { x: 4 })).toBe(NaN);
});

