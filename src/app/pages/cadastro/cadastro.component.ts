import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioBaseService } from 'src/app/core/services/formulario-base.service';
import { Usuario } from 'src/app/core/types/type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  cadastroForm!: FormGroup;
  generos: string[] = ['Masculino', 'Feminino', 'Prefiro não informar'];


  constructor(
    private _formBuilder: FormBuilder,
    private _formularioBaseService: FormularioBaseService,
    private _router: Router){}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.cadastroForm = this._formBuilder.group({
      nome: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      senhaConfirm: ['', Validators.required]
    });
  }

  cadastrar(event: Usuario) {
    this._formularioBaseService.cadastrar(event)
    .subscribe(
      {
        next: (data: Usuario) => {
          console.log(data);
          this._router.navigate(['/']);
        },
        error: (error) => {
          console.error(error);
        }
      }
    )
  }


  obterControle(nome:string): FormControl {
    const control = this.cadastroForm.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }
}
