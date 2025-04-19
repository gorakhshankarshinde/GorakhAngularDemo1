import { Component, OnInit } from '@angular/core';
import { JokeService, Joke } from '../services/joke.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  joke: Joke | null = null;
  loading = false; // <-- Spinner flag

  constructor(private jokeService: JokeService) {}

  ngOnInit(): void {
    this.loadJoke();
  }

  loadJoke(): void {
    this.loading = true; // Start loading
    this.jokeService.getJoke().subscribe({
      next: (data) => {
        this.joke = data;
        this.loading = false; // Stop loading
      },
      error: (err) => {
        console.error('Error loading joke', err);
        this.loading = false; // Stop loading even if error
      }
    });
  }
}
