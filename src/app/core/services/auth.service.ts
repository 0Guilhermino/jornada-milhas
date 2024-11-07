import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login, LoginResponse } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  login(loginBody:Login): Observable<LoginResponse> {
    const url = `${this.apiUrl}/auth/login`;
    return this.http.post<LoginResponse>(url, loginBody);
  }
}
