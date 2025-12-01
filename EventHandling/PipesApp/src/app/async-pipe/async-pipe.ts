import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-pipe.html',
  styleUrl: './async-pipe.css'
})
export class AsyncPipeComponent implements OnInit {
  // Observable that emits messages over time
  loadingMessage$!: Observable<string>;
  
  // Observable that counts down
  countdown$!: Observable<number>;
  
  // Observable that displays jokes about the missing GitHub link
  gitHubJoke$!: Observable<string>;

  ngOnInit() {
    // Loading message that changes every 2 seconds
    this.loadingMessage$ = interval(2000).pipe(
      take(3),
      map(count => {
        const messages = [
          'Looking for the GitHub link...',
          'Still searching for that example...',
          'GitHub link not found! Making my own! 🎉'
        ];
        return messages[count];
      })
    );

    // Countdown from 5 to 0
    this.countdown$ = interval(1000).pipe(
      take(6),
      map(count => 5 - count)
    );

    // Rotating jokes about the missing GitHub link
    this.gitHubJoke$ = interval(3000).pipe(
      take(4),
      map(index => {
        const jokes = [
          '404: GitHub link not found... but I took a stab at this anyways! 💡'
        ];
        return jokes[index];
      })
    );
  }
}