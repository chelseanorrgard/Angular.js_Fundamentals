import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstPipes } from './first-pipes/first-pipes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstPipes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'PipesApp';
}