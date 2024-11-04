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
export class DropdownUfComponent {
  @Input() placeholder!: string;
  @Input() prefixIconName!: string;
  @Input() label!: string;
  estados: UnidadeFederativa[] = [];

  myControl = new FormControl('');
  filteredOptions!: Observable<UnidadeFederativa[]>;

  constructor(private estadosService: EstadosService) {}

  ngOnInit() {
    this.buscarEstados();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): UnidadeFederativa[] {
    const filterValue = value.toLowerCase();

    return this.estados.filter((option) =>
      option.nome.toLowerCase().includes(filterValue)
    );
  }

  buscarEstados() {
    this.estadosService.listarEstados().subscribe({
      next: (estados) => {
        this.estados = estados;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
