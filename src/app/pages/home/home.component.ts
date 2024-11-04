import { Depoimento, Promocao } from 'src/app/core/types/type';
import { PromocaoService } from './../../core/services/promocao.service';
import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaPromocoes: Promocao[] = [];
  listaDepoimentos: Depoimento[] = [];

  constructor(private promocaoService: PromocaoService,
    private service: DepoimentoService
  ){
  }
  ngOnInit(): void {
    this.listarPromocoes();
    this.listarDepoimentos();
  }

  listarPromocoes() {
    this.promocaoService.listar()
    .subscribe({
      next: promocoes => {
        this.listaPromocoes = promocoes
      },
      error: error => {
        console.error('Erro ao listar promoções:', error)
      }
    });
  }

  listarDepoimentos() {
    this.service.listar().subscribe(
      res => {
        this.listaDepoimentos = res;
      }
    )
  }




}
