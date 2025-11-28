import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isGreen = signal(false);
  showMessage = signal(false);

  // message connected to input + <p>
  text = signal('Hello! You have clicked the button.');

  toggle() {
    this.isGreen.update(v => !v);
    this.showMessage.update(v => !v);
  }
}
