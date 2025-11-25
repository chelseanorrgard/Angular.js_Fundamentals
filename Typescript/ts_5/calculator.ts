import { Values } from './values';

export class Calculator {
    values: Values;

    constructor(values: Values) {
        this.values = values;
    }

    add(): number {
        return this.values.num1 + this.values.num2;
    }

    subtract(): number {
        return this.values.num1 - this.values.num2;
    }

    multiply(): number {
        return this.values.num1 * this.values.num2;
    }

    divide(): number | string {
        if (this.values.num2 === 0) return "Error: Division by zero";
        return this.values.num1 / this.values.num2;
    }
}