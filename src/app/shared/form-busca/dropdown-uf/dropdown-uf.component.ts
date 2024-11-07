import { EstadosService } from './../../../core/services/estados.service';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUfComponent { @Input() label: string = '';
  @Input() iconePrefixo: string = '';
  @Input() control!: FormControl;

  unidadesFederativas: UnidadeFederativa[] = [];

  filteredOptions$?: Observable<UnidadeFederativa[]>;


  constructor(
    private unidadeFederativaService: EstadosService) {

  }

  ngOnInit(): void {
    this.unidadeFederativaService.listarEstados()
      .subscribe(dados => {
        this.unidadesFederativas = dados
        console.log(this.unidadesFederativas)
      })
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarUfs(value))
    )
  }

  filtrarUfs(value: string): UnidadeFederativa[] {
    const valorFiltrado = value?.toLowerCase();
    const result = this.unidadesFederativas.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )
    return result
  }
}
