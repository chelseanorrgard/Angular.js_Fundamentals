import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-division',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './division.html',
  styleUrl: './division.css'
})
export class Division {
  @Input() resultFromAddition: number | null = null;
  divisor: number = 2;
  divisionResult: number | null = null;

  divisorOptions: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  selectDivisor(value: number): void {
    this.divisor = value;
  }

  performDivision(): void {
    if (this.resultFromAddition !== null) {
      this.divisionResult = this.resultFromAddition / this.divisor;
    }
  }
}