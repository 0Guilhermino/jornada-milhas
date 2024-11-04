import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoPassageiroComponent } from './selecao-passageiro.component';

describe('SelecaoPassageiroComponent', () => {
  let component: SelecaoPassageiroComponent;
  let fixture: ComponentFixture<SelecaoPassageiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecaoPassageiroComponent]
    });
    fixture = TestBed.createComponent(SelecaoPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
