import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true
})
export class TextColor implements OnInit {
  @Input() appTextColor: string = 'black'; // Default color is black

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'color',
      this.appTextColor
    );
  }
}