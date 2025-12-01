import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonPipe as JsonPipeComponent } from '../json-pipe/json-pipe';
import { AsyncPipeComponent } from '../async-pipe/async-pipe';
import { CustomPipes } from '../custom-pipes/custom-pipes';

@Component({
  selector: 'app-first-pipes',
  standalone: true,
  imports: [CommonModule, JsonPipeComponent, AsyncPipeComponent, CustomPipes],
  templateUrl: './first-pipes.html',
  styleUrl: './first-pipes.css'
})
export class FirstPipes {
  today: Date = new Date();
  amount: number = 5365.75;
  percent: number = 0.111;
  message: string = 'HELLO ANGULAR PIPES!';
  user = {
    name: 'John Doe',
    age: 25,
    email: 'john@example.com'
  };
}