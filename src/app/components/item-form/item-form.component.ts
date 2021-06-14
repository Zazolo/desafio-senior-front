import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EMeasurementUnit } from 'src/app/interfaces/enum/e-measurement-unit';
import { IListTableData } from 'src/app/interfaces/ilist-table-data';



@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit, AfterViewInit, OnChanges {

  @Input("data") data:IListTableData | undefined;

  submitAttempt = false;

  today = new Date();

  perishable_visibility = false;

  dataForm:FormGroup = new FormGroup({
    id: new FormControl(''),
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

  @Output() form = new EventEmitter();
  
  constructor(
    private msgs:MessageService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.data){
      let currentValues = changes.data.currentValue;
      if(currentValues != undefined){
        console.log('CURRENT', currentValues);
        this.dataForm.patchValue({
          id: currentValues.id,
          name: currentValues.name,
          measurement_unit: currentValues.measurement_unit,
          quantity: currentValues.quantity || 0,
          price: currentValues.price,
          perishable: currentValues.perishable,
          expiration_date: new Date(currentValues.expiration_date) || null,
          manufacturing_date: new Date(currentValues.manufacturing_date) || null
        })
      }
      
    }
  }

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
    if(this.dataForm.status == 'VALID'){
      if(this.perishable_visibility){
        const exp_date =  <FormControl>this.dataForm.get('expiration_date');
        const fab_date =  <FormControl>this.dataForm.get('manufacturing_date');
        if(fab_date.value < exp_date.value){
          this.form.emit(this.dataForm.value);  
        } else {
          console.log("Data de fabricação é superior a de validade.");
        }
      } else {
        this.form.emit(this.dataForm.value);
      }
      
    }
  }

  ngOnInit(): void {
    const cbFormControl = <FormControl>this.dataForm.get('perishable');
    const dateFormControl = <FormControl>this.dataForm.get('expiration_date');
    cbFormControl.valueChanges.subscribe(value => {
      if (value[0]) {
        dateFormControl.setValidators([Validators.required]);
        this.perishable_visibility = true;
      }
      else {
        dateFormControl.setValidators(null);
        this.perishable_visibility = false;
      }
      dateFormControl.updateValueAndValidity();
    });


  }

}
