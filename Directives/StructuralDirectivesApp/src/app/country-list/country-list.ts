import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css'
})
export class CountryList {
  countries: string[] = ['Finland', 'Sweden', 'Estonia', 'Spain', 'Japan'];

  getFlagUrl(country: string): string {
    const flags: { [key: string]: string } = {
      'Finland': 'https://flagcdn.com/w40/fi.png',
      'Sweden': 'https://flagcdn.com/w40/se.png',
      'Estonia': 'https://flagcdn.com/w40/ee.png',
      'Spain': 'https://flagcdn.com/w40/es.png',
      'Japan': 'https://flagcdn.com/w40/jp.png'
    };
    return flags[country] || '';
  }
}