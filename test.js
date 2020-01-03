const opz = require('./index.js');

// const a = opz.getValue('(-3 + 1 )+ 4 * -2 / (-1 - 5)^2');
// const a = opz.getOPZformat('2*x +1');

calculateGraph = ([start, end] = [], formula) => {
  if (!formula) return;

  const opzFormula = opz.getOPZformat(formula);
  if (!opzFormula.includes('x')) {
    return opz.getOpzValue(opzFormula);
  }

  const length = Math.abs(end - start) + 1;
  const vars = Array.from({ length }, (v, k) => k + Math.min(end, start));
  const linePoints = vars.map((x) => {
    console.log('error', opzFormula )
    const y = opz.getOpzValue([...opzFormula], {x});
    return [x, y];
  });
  console.log('error', linePoints )
  const flatPoints = linePoints.flat();
  if (flatPoints.includes(NaN)) return false;
  return flatPoints
}

const b = calculateGraph([20,40], '2*x +1');
console.log('val', b );