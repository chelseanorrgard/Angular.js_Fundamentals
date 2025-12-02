import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-toggle.html',
  styleUrl: './image-toggle.css'
})
export class ImageToggle {
  showImage: boolean = true;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}