import { FormBuscaService } from './../../core/services/form-busca.service';
import { Component, OnInit } from '@angular/core';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent implements OnInit{
buscar() {
}

  listaEstados: UnidadeFederativa[] = [];

  constructor(
    protected formBuscaService :FormBuscaService
    ) {}
  ngOnInit(): void {
  }



}
