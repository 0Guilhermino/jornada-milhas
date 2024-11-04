import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatChipSelectionChange } from '@angular/material/chips';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {
alterarTipo(event: MatChipSelectionChange, tipo: string) {
  if (event.selected) {
    this.formularioBusca.patchValue({
      tipo
    })
  }
}

  formularioBusca!: FormGroup
  apiUrl = environment.apiUrl;

  constructor(
    public dialog: MatDialog
  ) {
    this.formularioBusca = new FormGroup({
      somenteIda: new FormControl(false),
      passageirosAdultos: new FormControl(1),
      passageirosCriancas: new FormControl(0),
      passageirosBebes: new FormControl(0),
      tipo: new FormControl("Econômica"),
      dataIda : new FormControl(new Date()),
      dataVolta : new FormControl(),
      origem : new FormControl(),
      destino : new FormControl(),
    });
  }

  getDescricaoPassageiros (): string {
    let descricao = ''

    const adultos = this.formularioBusca.get('passageirosAdultos')?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's' : ''}`;
    }

    const criancas = this.formularioBusca.get('passageirosCriancas')?.value;
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} criança${criancas > 1 ? 's' : ''}`;
    }

    const bebes = this.formularioBusca.get('passageirosBebes')?.value;
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} bebê${bebes > 1 ? 's' : ''}`;
    }

    return descricao
  }

  obterControle(nome:string): FormControl {
    const control = this.formularioBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }


  openDialog() {
    this.dialog.open(ModalComponent);
  }

  trocarOrigemDestino(): void {
    const origem = this.formularioBusca.get('origem')?.value;
    const destino = this.formularioBusca.get('destino')?.value;

    this.formularioBusca.patchValue({
      origem: destino,
      destino: origem
    });
  }

}
