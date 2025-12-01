import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Division } from '../division/division';

@Component({
  selector: 'app-random-number',
  standalone: true,
  imports: [CommonModule, FormsModule, Division],
  templateUrl: './random-number.html',
  styleUrl: './random-number.css'
})
export class RandomNumber {
  randomNumber: number | null = null;
  inputNumber: number = 0;
  result: number | null = null;

  generateRandomNumber(): void {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
    this.result = this.randomNumber + this.inputNumber;
  }
}