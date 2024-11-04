import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UnidadeFederativa } from '../types/type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formularioBusca!: FormGroup
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
    this.formularioBusca = new FormGroup({
      somenteIda: new FormControl(false),
      passageirosAdultos: new FormControl(1),
      passageirosCriancas: new FormControl(0),
      passageirosBebes: new FormControl(0),
      tipo: new FormControl(),
      dataIda : new FormControl(new Date()),
      dataVolta : new FormControl(),
    });
  }

  obterControle(nome:string): FormControl {
    const control = this.formularioBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

}
