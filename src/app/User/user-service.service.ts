import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://hotelmanagementsystem-yi9b.onrender.com/api/User';

  constructor(private http: HttpClient) { }

  // This method returns an Observable of the response from the API
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
