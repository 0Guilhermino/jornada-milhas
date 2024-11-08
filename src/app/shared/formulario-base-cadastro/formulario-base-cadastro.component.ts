import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UnidadeFederativa } from 'src/app/core/types/type';
import { EqualsTo } from '../validations/EqualsTo';

@Component({
  selector: 'app-form-base-cadastro',
  templateUrl: './formulario-base-cadastro.component.html',
  styleUrls: ['./formulario-base-cadastro.component.scss']
})
export class FormularioBaseCadastroComponent implements OnInit{
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<string | null>(null, Validators.required);
  @Input() cadastroComponent: boolean = false;
  @Output() sendForm: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cidade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: [null, Validators.required],
      estado: this.estadoControl,
      confirmarEmail: [null, [Validators.required, Validators.email, EqualsTo.equalTo('email')]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3), EqualsTo.equalTo('senha')]],
      aceitarTermos: [null, [Validators.requiredTrue]]
    });
  }

  submitForm() {
    this.sendForm.emit(this.cadastroForm.value);
  }
}
