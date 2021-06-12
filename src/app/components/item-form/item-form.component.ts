import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Messages } from 'primeng/messages';
import { BehaviorSubject } from 'rxjs';
import { EMeasurementUnit } from 'src/app/interfaces/enum/e-measurement-unit';
import { IListTableData } from 'src/app/interfaces/ilist-table-data';



@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit, AfterViewInit {

  @Input("data") data:IListTableData | undefined;

  submitAttempt = false;

  today = new Date();

  dataForm:FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(50),
      Validators.pattern(/^[a-záàâãéèêíïóôõöúçñ ]+$/i)
    ]),
    measurement_unit:new FormControl('', [
      Validators.required
    ]),
    quantity: new FormControl('', [

    ]),
    price:new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    perishable:new FormControl(false),
    expiration_date: new FormControl(''),
    manufacturing_date:new FormControl('', [
      Validators.required
    ]),
  });

  weight_options:Object[] = [
    {name: "Quilograma", value: EMeasurementUnit.Quilograma},
    {name: "Unitário", value: EMeasurementUnit.Unidade},
    {name: "Litro", value: EMeasurementUnit.Litro},
  ];

  measurement_unit_selected_value = EMeasurementUnit.Quilograma;

  constructor(
    private msgs:MessageService
  ) { }

  ngAfterViewInit(): void {
    
  }

  create(){
    console.log(this.dataForm);
  }

  dropdownChange(evt:any){
    this.measurement_unit_selected_value = evt.value.value;
  }

  dateBigger(date1:Date, date2:Date):boolean{    
    if (date1 > date2) {    
      return true;
    }else {    
      return false;
    }    
  }    
  submit(evt:string){
    console.log(this.dataForm)
    this.submitAttempt = true;
    this.msgs.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    //console.log('ATTEMPT', this.submitAttempt)
  }
  ngOnInit(): void {
    const cbFormControl = <FormControl>this.dataForm.get('perishable');
    const dateFormControl = <FormControl>this.dataForm.get('expiration_date');
    cbFormControl.valueChanges.subscribe(value => {
      if (value[0]) {
        console.log('TRUE');
        dateFormControl.setValidators([Validators.required])
      }
      else {
        console.log('FALSE');
        dateFormControl.setValidators(null);
      }
      dateFormControl.updateValueAndValidity();
    });


  }

}
