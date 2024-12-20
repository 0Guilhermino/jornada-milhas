import { Injectable } from '@angular/core';

const KEY = 'token';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  salvarToken(token: string){
    localStorage.setItem(KEY, token);
  }

  excluirToken(){
    localStorage.removeItem(KEY);
  }

  getToken(): string{
    return localStorage.getItem(KEY) ?? '';
  }

  possuiToken(): boolean{
    return !!this.getToken();
  }


}
