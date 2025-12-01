import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from '../reverse-pipe';
import { LettersOnlyPipe } from '../letters-only-pipe';

@Component({
  selector: 'app-custom-pipes',
  standalone: true,
  imports: [CommonModule, FormsModule, ReversePipe, LettersOnlyPipe],
  templateUrl: './custom-pipes.html',
  styleUrl: './custom-pipes.css'
})
export class CustomPipes {
  inputText: string = '';
  showResults: boolean = false;

  transformText(): void {
    if (this.inputText.trim()) {
      this.showResults = true;
    }
  }

  reset(): void {
    this.inputText = '';
    this.showResults = false;
  }
}