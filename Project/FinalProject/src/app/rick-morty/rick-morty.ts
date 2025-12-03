import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: string[];
}

interface ApiResponse {
  results: Character[];
}

@Component({
  selector: 'app-rick-morty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rick-morty.html',
  styleUrl: './rick-morty.css'
})
export class RickMorty implements OnInit {
  characters: Character[] = [];
  displayedCharacters: Character[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.loading = true;
    this.error = '';

    this.http.get<ApiResponse>('https://rickandmortyapi.com/api/character')
      .subscribe({
        next: (response) => {
          this.characters = response.results;
          this.showRandomCharacters();
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load characters. Even interdimensional cable has better connection than this.';
          this.loading = false;
          console.error('Error loading characters:', err);
        }
      });
  }

  showRandomCharacters(): void {
    const shuffled = [...this.characters].sort(() => 0.5 - Math.random());
    this.displayedCharacters = shuffled.slice(0, 6);
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'alive':
        return '#4fd1c5';
      case 'dead':
        return '#ff6ec4';
      default:
        return '#7873f5';
    }
  }
}