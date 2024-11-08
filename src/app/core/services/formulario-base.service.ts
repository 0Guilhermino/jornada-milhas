import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class FormularioBaseService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  cadastrar(form: Usuario): Observable<Usuario> {
    const url = `${this.apiUrl}/auth/cadastro`;
    return this.http.post<Usuario>(url, form);
  }
}
