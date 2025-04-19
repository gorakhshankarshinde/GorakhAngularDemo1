import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Joke {
  setup: string;
  punchline: string;
}

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private apiUrl = 'https://official-joke-api.appspot.com/random_joke';

  constructor(private http: HttpClient) {}

  getJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.apiUrl);
  }
}
