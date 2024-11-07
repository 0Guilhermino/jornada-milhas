import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBaseCadastroComponent } from './formulario-base-cadastro.component';

describe('FormularioBaseCadastroComponent', () => {
  let component: FormularioBaseCadastroComponent;
  let fixture: ComponentFixture<FormularioBaseCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioBaseCadastroComponent]
    });
    fixture = TestBed.createComponent(FormularioBaseCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
