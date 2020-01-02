const opz = require('./index.js');

// const a = opz.getValue('(-3 + 1 )+ 4 * -2 / (-1 - 5)^2');
const a = opz.getOPZformat('2*x^(2+4 * 1)');
const b = opz.getOpzValue(a, {x: "1"});
console.log('error', b );