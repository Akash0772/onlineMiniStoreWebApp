import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    const body = { email, password };
    return this.http.post<LoginResponse>(this.apiUrl, body);
  }
  logout(): void {
    // clear token remove user from local storage to log user out
    //  this.email = null;
    localStorage.removeItem('currentUser');
    //  this.router.navigate(['/']);
  }
}
