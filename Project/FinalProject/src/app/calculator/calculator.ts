import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  display: string = '0';
  currentValue: number = 0;
  operator: string = '';
  waitingForOperand: boolean = false;

  inputDigit(digit: string): void {
    if (this.waitingForOperand) {
      this.display = digit;
      this.waitingForOperand = false;
    } else {
      this.display = this.display === '0' ? digit : this.display + digit;
    }
  }

  inputDecimal(): void {
    if (this.waitingForOperand) {
      this.display = '0.';
      this.waitingForOperand = false;
      return;
    }

    if (!this.display.includes('.')) {
      this.display += '.';
    }
  }

  clear(): void {
    this.display = '0';
    this.currentValue = 0;
    this.operator = '';
    this.waitingForOperand = false;
  }

  performOperation(nextOperator: string): void {
    const inputValue = parseFloat(this.display);

    if (this.operator && this.waitingForOperand) {
      this.operator = nextOperator;
      return;
    }

    if (this.currentValue === 0) {
      this.currentValue = inputValue;
    } else if (this.operator) {
      const result = this.calculate(this.currentValue, inputValue, this.operator);
      
      if (result === null) {
        this.display = 'Error';
        this.currentValue = 0;
        this.operator = '';
        this.waitingForOperand = true;
        return;
      }

      this.display = String(result);
      this.currentValue = result;
    }

    this.waitingForOperand = true;
    this.operator = nextOperator;
  }

  calculate(firstValue: number, secondValue: number, operator: string): number | null {
    switch (operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        if (secondValue === 0) {
          return null; // Division by zero
        }
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  }

  equals(): void {
    const inputValue = parseFloat(this.display);

    if (this.operator) {
      const result = this.calculate(this.currentValue, inputValue, this.operator);
      
      if (result === null) {
        this.display = 'Error';
      } else {
        this.display = String(result);
        this.currentValue = result;
      }
      
      this.operator = '';
      this.waitingForOperand = true;
    }
  }
}