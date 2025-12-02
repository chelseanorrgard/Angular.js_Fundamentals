import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextColor } from './text-color';
import { TextTransform } from './text-transform';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextColor, TextTransform],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'TextColorApp';
}