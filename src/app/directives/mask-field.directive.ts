import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { EMeasurementUnit } from '../interfaces/enum/e-measurement-unit';

@Directive({
  selector: '[appMaskField]',
  inputs: [
		"appMaskField: appMaskField"
	]
})
export class MaskFieldDirective {

  private el:ElementRef;

  private decimals = 2;
  
  private fieldType:string | undefined;

  constructor(el:ElementRef) { 
    this.el = el;
    this.fieldType = this.el.nativeElement.dataset.fieldType;
  }

  private clearString(text:string):string{
    text = text.replace(/[^0-9]+/g, '');
    while(text.length > 0 && text.charAt(0)=='0')
    {
      text = text.substring(1); 
    }
    return text;
  }

  private addDot(nStr:string) {
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(nStr)) {
      nStr = nStr.replace(rgx, '$1' + '.' + '$2');
    }
    return nStr;
  }

  private transform(text:string, decimals = 2, isMoney = false){
    let str = this.clearString(text);
    if(decimals == 0){
      this.applyValues(str, isMoney);
      return;
    }
    if(str.length <= decimals){
      this.applyValues("0," + str, isMoney);
      return;
    } else {
      let last_three_digits = str.slice( (str.length - decimals), str.length );
      let remaining_chars = str.slice( 0, (str.length - decimals) );
      if(remaining_chars.length >= decimals){
        this.applyValues(this.addDot(remaining_chars) + "," + last_three_digits, isMoney);
        return;
      } else {
        this.applyValues(remaining_chars + "," + last_three_digits, isMoney);
        return;
      }

    }

  }

  private run(){
    switch(this.fieldType){
      case (EMeasurementUnit.Litro || EMeasurementUnit.Quilograma):
        this.transform(this.el.nativeElement.value, 3);
        break;
      case (EMeasurementUnit.Unidade):
        this.transform(this.el.nativeElement.value, 0);
        break;
      case 'money':
        this.transform(this.el.nativeElement.value, 2, true);
        break
    }
  }

  @HostListener('keyup', ['$event'])
  keyupEvent(event: KeyboardEvent){
    this.run();
  }

  @HostListener('keydown', ['$event'])
  keydownEvent(event: KeyboardEvent){
    console.log(event);
    if((event.key == 'Backspace') || (event.key == 'Delete')){
      this.applyValues('');
    }
  }

  private applyValues(value:string, isMoney = false):void{
    this.el.nativeElement.dataset.realValue = value;
    if(!isMoney){
      let sufix = '';
      switch(this.fieldType){
        case (EMeasurementUnit.Litro):
          sufix = EMeasurementUnit.Litro;
          break;
        case (EMeasurementUnit.Quilograma):
          sufix = EMeasurementUnit.Quilograma;
          break;
        case (EMeasurementUnit.Unidade):
          sufix = EMeasurementUnit.Unidade;
          break;
      }
      this.el.nativeElement.value= value + sufix;
    } else {
      this.el.nativeElement.value= 'R$' + value;
    }
    
  }
}
