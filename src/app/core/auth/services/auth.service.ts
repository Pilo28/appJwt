import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environments } from '../../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environments.baseUrl;
  private http = inject(HttpClient);
  private jwtHelper = inject(JwtHelperService);
  private route = inject(Router);
  

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/authenticate`, { username, password })
      .pipe(
        map(token => {
          sessionStorage.setItem('token', token.toString());
          return token;
        }),
        catchError(this.handleError)
      );
  }

  isLoggedIn(): boolean {
    const token = sessionStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  public getUserRole(): string | null {
    const token = sessionStorage.getItem('token');
    if (!token) return null;
  
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken.role;
  }

  public logout(): void {
    sessionStorage.removeItem('token');
    this.route.navigate(['/auth/login']);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
