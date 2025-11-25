"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    constructor(values) {
        this.values = values;
    }
    add() {
        return this.values.num1 + this.values.num2;
    }
    subtract() {
        return this.values.num1 - this.values.num2;
    }
    multiply() {
        return this.values.num1 * this.values.num2;
    }
    divide() {
        if (this.values.num2 === 0)
            return "Error: Division by zero";
        return this.values.num1 / this.values.num2;
    }
}
exports.Calculator = Calculator;
