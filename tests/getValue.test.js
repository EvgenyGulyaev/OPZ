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

test('simple check unary -', () => {
  expect(opz.getValue('-4 + 11 - 21 + 16',)).toBe(2);
});

test('simple check unary - after (', () => {
  expect(opz.getValue('-2 + (-4 + 11 - 21 + 16)',)).toBe(0);
});

test('simple check unary - after operators', () => {
  expect(opz.getValue('-2 + -2',)).toBe(-4);
});

test('2 or more (', () => {
  expect(opz.getValue('(4+(-2 + -2))',)).toBe(0);
});

test('2 or more ( without )', () => {
  expect(opz.getValue('(4+(-2 + -2)',)).toBe(NaN);
});

test('-number from sqrt', () => {
  expect(opz.getValue('sqrt(-9)',)).toBe(NaN);
});

test('number from sqrt without ()', () => {
  expect(opz.getValue('sqrt 4+(-2 + -2)',)).toBe(0);
});
