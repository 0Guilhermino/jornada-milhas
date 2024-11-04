import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Promocao, UnidadeFederativa } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PromocaoService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listar(): Observable<Promocao[]> {
    const url = `${this.apiUrl}/promocoes`;
    return this.http.get<Promocao[]>(url);
  }



}
