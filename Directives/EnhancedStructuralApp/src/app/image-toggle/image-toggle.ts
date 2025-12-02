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
  clickCount: number = 0;
  images: string[] = [
    '1.png',
    '2.png',
    '3.png'
  ];
  currentImageIndex: number = 0;
  buttonColor: string = '#4CAF50';
  animationClass: string = '';

  toggleImage(): void {
    this.showImage = !this.showImage;
    this.clickCount++;
    this.triggerAnimation();
    this.updateButtonColor();
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.clickCount++;
    this.triggerAnimation();
  }

  previousImage(): void {
    this.currentImageIndex = this.currentImageIndex === 0 
      ? this.images.length - 1 
      : this.currentImageIndex - 1;
    this.clickCount++;
    this.triggerAnimation();
  }

  resetAll(): void {
    this.showImage = true;
    this.clickCount = 0;
    this.currentImageIndex = 0;
    this.buttonColor = '#4CAF50';
  }

  private updateButtonColor(): void {
    const colors = ['#4CAF50', '#2196F3', '#FF9800', '#E91E63', '#9C27B0'];
    this.buttonColor = colors[this.clickCount % colors.length];
  }

  private triggerAnimation(): void {
    this.animationClass = 'fade-in';
    setTimeout(() => {
      this.animationClass = '';
    }, 500);
  }

  getCurrentImage(): string {
    return this.images[this.currentImageIndex];
  }

  getImageName(): string {
    const names = ['Lucy in a multi-colored sweater', 'Lucy in a blue sweater', 'Lucy in a hand-knit sweater'];
    return names[this.currentImageIndex];
  }
}