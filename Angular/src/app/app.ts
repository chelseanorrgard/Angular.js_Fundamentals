import { Component, signal } from '@angular/core';
import { Weather } from './weather/weather';
import { Weather2 } from './weather2/weather2';

@Component({
  selector: 'app-root',
  imports: [Weather, Weather2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('Fundamentals of Angular.js');
  intro = signal(
    `My name is Chelsea Norrgård. I'm originally from the USA, but have been living in Finland for 9 years. I'm a former nurse who is now nearly done with my degree in IT.`
  );
}
