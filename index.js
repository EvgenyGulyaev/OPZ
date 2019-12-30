const op = {
  '-': 1,
  '+': 1,
  '*': 2,
  '/': 2,
  '^': 3,
  // 'sqrt': 3, -> Memory
};

const operators = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
  '^': (x, y) => Math.pow(x, y),
  'sqrt': (x) => Math.sqrt(x),
};

class OPZ {
  constructor() {
    this.setInitialValue()
  }

  setInitialValue() {
    this.input = '';
    this.result = [];
    this.stack = [];
    this.isContinue = false;
    this.value = 0;
    this.mayChangeSign = true;
  }

  popHead() {
    const operand = this.stack.pop();
    this.result.push(operand);
  }

  getValue(str) {
    this.getOPZformat(str);
    this.getOpzValue();
    return this.value;
  }

  getOPZformat(str) {
    try {
      this.input = str.replace(/\s+/g, '');
      for (let i = 0; i < this.input.length; i++) {

        if (this.input[i] === '.') {
          this.mayChangeSign = false;
          this.result[this.result.length - 1] += this.input[i];
          this.isContinue = true;
          continue;
        }

        if (['q', 'r', 't'].includes(this.input[i])) {
          this.stack[this.stack.length - 1] += this.input[i];
          continue;
        }

        if (Number.isInteger(+this.input[i])) {
          this.mayChangeSign = false;
          if (this.isContinue) {
            this.result[this.result.length - 1] += this.input[i];
            continue;
          }
          this.result.push(this.input[i]);
          continue;
        }

        if (this.input[i] === ')') {
          this.mayChangeSign = false;
          while (this.stack[this.stack.length - 1] !== '(') {
            this.popHead();
          }
          this.stack.pop();
          continue;
        }

        if (this.mayChangeSign && this.input[i] === '-') {
          this.result.push(this.input[i]);
          this.isContinue = true;
          continue;
        }

        if (this.stack.length && this.input[i] !== '(') {
          while (op[this.stack[this.stack.length - 1]] >= op[this.input[i]]) {
            this.popHead();
          }
        }

        if (this.input[i] === '(' || Object.keys(op).includes(this.input[i])) this.mayChangeSign = true;

        this.stack.push(this.input[i]);
        this.isContinue = this.input[i] === '.';
      }
      this.result = [...this.result, ...this.stack.reverse()];
      this.stack = [];
      return this.result.join('');
    }
    catch (e) {
      this.setInitialValue();
      return e;
    }

  }

  getOpzValue(opzStr = '') {
    if (!opzStr) opzStr = this.result;
    this.stack = [];
    const opKeys = Object.keys(operators);

    for (let i = 0; i < opzStr.length; i++) {
      if (opKeys.includes(opzStr[i])) {
        if (opzStr[i] !== 'sqrt') {
          let [y, x] = [this.stack.pop(), this.stack.pop()];
          this.stack.push(operators[opzStr[i]](x, y));
          continue;
        }
        let [x] = [this.stack.pop()];
        this.stack.push(operators[opzStr[i]](x));
        continue;
      }
      this.stack.push(parseFloat(opzStr[i]));
    }
    this.value = this.stack.pop();
  }

}

module.exports = new OPZ();