import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login, LoginResponse } from '../types/type';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(loginBody:Login): Observable<LoginResponse> {
    const url = `${this.apiUrl}/auth/login`;
    return this.http.post<LoginResponse>(url, loginBody)
    .pipe(
      tap((response: LoginResponse) => {
        const token = response?.access_token || ''
        this.tokenService.salvarToken(token);
      })
    );
  }
}
