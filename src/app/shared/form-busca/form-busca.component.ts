import { FormBuscaService } from './../../core/services/form-busca.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent implements OnInit{

  listaEstados: UnidadeFederativa[] = [];

  constructor(
    public dialog: MatDialog,
    protected formBuscaService :FormBuscaService
    ) {}
  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }


}
