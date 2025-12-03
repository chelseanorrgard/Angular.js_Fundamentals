import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-editor.html',
  styleUrl: './text-editor.css'
})
export class TextEditor {
  inputText: string = '';
  outputText: string = '';
  operationHistory: string[] = [];

  toUpperCase(): void {
    this.outputText = this.inputText.toUpperCase();
    this.addToHistory('Converted to UPPERCASE');
  }

  toLowerCase(): void {
    this.outputText = this.inputText.toLowerCase();
    this.addToHistory('Converted to lowercase');
  }

  toTitleCase(): void {
    this.outputText = this.inputText
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    this.addToHistory('Converted to Title Case');
  }

  reverse(): void {
    this.outputText = this.inputText.split('').reverse().join('');
    this.addToHistory('Reversed the text');
  }

  alternatingCase(): void {
    this.outputText = this.inputText
      .split('')
      .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
      .join('');
    this.addToHistory('Applied AlTeRnAtInG cAsE');
  }

  removeSpaces(): void {
    this.outputText = this.inputText.replace(/\s+/g, '');
    this.addToHistory('Removed all spaces');
  }

  countWords(): void {
    const words = this.inputText.trim().split(/\s+/).filter(word => word.length > 0);
    this.outputText = `Word count: ${words.length}`;
    this.addToHistory('Counted words');
  }

  countCharacters(): void {
    this.outputText = `Character count: ${this.inputText.length} (including spaces)`;
    this.addToHistory('Counted characters');
  }

  addToHistory(operation: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.operationHistory.unshift(`${timestamp} - ${operation}`);
    if (this.operationHistory.length > 10) {
      this.operationHistory.pop();
    }
  }

  clearAll(): void {
    this.inputText = '';
    this.outputText = '';
    this.operationHistory = [];
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.outputText).then(() => {
      alert('Copied to clipboard!');
    });
  }
}