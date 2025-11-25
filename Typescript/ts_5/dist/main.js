"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator");
const values_1 = require("./values");
// Test
const myValues = new values_1.Values(10, 5);
const myCalc = new calculator_1.Calculator(myValues);
console.log(`Add: ${myCalc.add()}`);
console.log(`Subtract: ${myCalc.subtract()}`);
console.log(`Multiply: ${myCalc.multiply()}`);
console.log(`Divide: ${myCalc.divide()}`);
