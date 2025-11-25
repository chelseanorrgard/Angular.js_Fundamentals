import { Calculator } from './calculator';
import { Values } from './values';

// Test
const myValues = new Values(10, 5);
const myCalc = new Calculator(myValues);

console.log(`Add: ${myCalc.add()}`);
console.log(`Subtract: ${myCalc.subtract()}`);
console.log(`Multiply: ${myCalc.multiply()}`);
console.log(`Divide: ${myCalc.divide()}`);
