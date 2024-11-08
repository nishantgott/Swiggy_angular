import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://672d4439fd8979715641eb22.mockapi.io/users';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    const params = new HttpParams().set('username', username).set('password', password);

    return this.http.get<any[]>(this.apiUrl, { params }).pipe(
      map(users => {
        if (users && users.length > 0) {
          const user = users[0]; // Assuming the API returns a single user or array with a matching user
          if (this.isLocalStorageAvailable()) {
            localStorage.setItem('username', username);
            if (user.address) {
              localStorage.setItem('address', user.address);
            }
          }
          return true;
        }
        return false;
      }),
      catchError(error => {
        return of(false);
      })
    );
  }

  logout(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('username');
      localStorage.removeItem('address');
      localStorage.removeItem('currentUser');
    }
  }

  isLoggedIn(): boolean {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('username') !== null;
    }
    return false;
  }

  getUsername(): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('username');
    }
    return null;
  }

  getAddress(): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('address');
    }
    return null;
  }

  isAuthenticated(): boolean {
    if (this.isLocalStorageAvailable()) {
      const currentUser = localStorage.getItem('currentUser');
      return localStorage.getItem('username') !== null;
    }
    return false;
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}
