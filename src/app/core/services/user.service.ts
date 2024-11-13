import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Usuario } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<Usuario | null>(null);

  constructor(
    private tokenService: TokenService
  ) {
    if (this.tokenService.possuiToken()) {
      this.decodificarJwt()
    }
  }
  decodificarJwt() {
    const token = this.tokenService.getToken();
    const user = jwtDecode(token) as Usuario;
    this.userSubject.next(user);
  }

  retornarUser(){
    return this.userSubject.asObservable();
  }

  salvarToken(token: string) {
    this.tokenService.salvarToken(token);
    this.decodificarJwt();
  }

  logout(){
    this.tokenService.excluirToken();
    this.userSubject.next(null);
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
