import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextTransform]',
  standalone: true
})
export class TextTransform implements OnInit {
  @Input() appTextTransform: 'uppercase' | 'lowercase' | 'capitalize' | 'reverse' | 'alternate' = 'uppercase';

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const originalText = this.element.nativeElement.textContent;
    const transformedText = this.transformText(originalText);
    this.renderer.setProperty(this.element.nativeElement, 'textContent', transformedText);
  }

  private transformText(text: string): string {
    switch (this.appTextTransform) {
      case 'uppercase':
        return text.toUpperCase();
      
      case 'lowercase':
        return text.toLowerCase();
      
      case 'capitalize':
        return text
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
      
      case 'reverse':
        return text.split('').reverse().join('');
      
      case 'alternate':
        return text
          .split('')
          .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
          .join('');
      
      default:
        return text;
    }
  }
}