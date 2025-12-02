import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageToggle } from './image-toggle/image-toggle';
import { CountryList } from './country-list/country-list';
import { UserInfo } from './user-info/user-info';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageToggle, CountryList, UserInfo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'StructuralDirectivesApp';
}