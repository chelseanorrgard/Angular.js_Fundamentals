import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  views = [
    {
      name: 'Calculator',
      route: '/calculator',
      description: 'A fully functional calculator that does math so you don\'t have to. Because let\'s be honest, who actually remembers how to do long division anymore?',
      tech: 'Built using Angular event binding, two-way data binding with ngModel, and TypeScript methods. Includes error handling for those moments when you try to divide by zero and break the universe.',
      color: '#ff6ec4'
    },
    {
      name: 'Text Editor',
      route: '/text-editor',
      description: 'A text manipulation playground where you can make your text scream in uppercase, whisper in lowercase, or do that annoying aLtErNaTiNg CaSe thing. Because sometimes your text needs personality.',
      tech: 'Uses Angular pipes (both built-in and custom), string manipulation methods, and event binding. Basically, it\'s what happens when you give me too much power over text formatting.',
      color: '#7873f5'
    },
    {
      name: 'Rick & Morty API',
      route: '/rick-morty',
      description: 'Fetches random characters from the Rick and Morty API because if I\'m going to have free choice over API integration, it might as well involve interdimensional adventures and existential dread.',
      tech: 'Implements Angular HttpClient for API calls, handles asynchronous data with Observables, and displays character info including images. It\'s like a Pokedex, but for sci-fi alcoholics and anxious teenagers.',
      color: '#4fd1c5'
    }
  ];
}