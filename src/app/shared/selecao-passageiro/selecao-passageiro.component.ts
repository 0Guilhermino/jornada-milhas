import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-selecao-passageiro',
  templateUrl: './selecao-passageiro.component.html',
  styleUrls: ['./selecao-passageiro.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelecaoPassageiroComponent),
      multi: true,
    }
  ]
})
export class SelecaoPassageiroComponent implements ControlValueAccessor{
@Input() titulo: string = '';
@Input() subTitulo: string = '';

onChange = (value: number) => {};
onTouched = () => {};
value: number = 0;


writeValue(value: any): void {
  this.value = value;
}
registerOnChange(fn: any): void {
  this.onChange = fn;
}
registerOnTouched(fn: any): void {
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  // throw new Error('Method not implemented.');
}

incremetar() {
  this.value += 1;
  this.onChange(this.value);
}

decremetar() {
  if (this.value > 0) {
    this.value -= 1;
    this.onChange(this.value);
  }
}

}
