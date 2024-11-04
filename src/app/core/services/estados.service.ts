import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UnidadeFederativa } from '../types/type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl = environment.apiUrl;
  $unidadeFederativa!: Observable<UnidadeFederativa[]>;

  listarEstados(): Observable<UnidadeFederativa[]> {
    const url = `${this.apiUrl}/estados`;
    if (!this.$unidadeFederativa) {
      this.$unidadeFederativa = this.http
        .get<UnidadeFederativa[]>(url)
        .pipe(shareReplay(1));
    }
    return this.$unidadeFederativa;
  }
}
