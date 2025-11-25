import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather2',
  standalone: true,
  templateUrl: './weather2.html',
  styleUrl: './weather2.css'
})
export class Weather2 {
  @Input() data: string = '';
}
