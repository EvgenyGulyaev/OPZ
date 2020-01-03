const opz = require('../index.js');

test('simple check on numbers together', () => {
  expect(opz.getOPZformat('344 + 289').length).toBe(3);
});

test('simple check on sqrt parse', () => {
  expect(opz.getOPZformat('sqrt(4 + 1 + 5 * 2 - 8 + 9)').join('')).toBe('41+52*+8-9+sqrt');
});

test('test OPZ Format from ru.wikipedia', () => {
  expect(opz.getOPZformat('3 + 4 * 2 / (1 - 5) ^ 2').join('')).toBe('342*15-2^/+');
});


