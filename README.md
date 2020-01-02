# OPZ
Обратная польская запись 

# Install
`npm i  opz-parser --save`


# Example 
```
const opz = require('./index.js');
const a = opz.getValue('sqrt(1 + 8)^(2+4 * 1)');
console.log('error', a );
```