import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { EMeasurementUnit } from 'src/app/interfaces/enum/e-measurement-unit';
import { IListTableData } from 'src/app/interfaces/ilist-table-data';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  @Input("data") data:IListTableData | undefined;
  
  dataForm:FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.requiredTrue,
      Validators.minLength(1),
      Validators.maxLength(50),
      Validators.pattern(/[^a-zA-Z]+/)
    ]),
    measurement_unit:new FormControl('', [
      Validators.required
    ]),
    quantity: new FormControl('', [

    ]),
    price:new FormControl(''),
    perishable:new FormControl(''),
    expiration_date: new FormControl(''),
    manufacturing_date:new FormControl(''),
  });

  weight_options:Object[] = [
    {name: "Quilograma", value: EMeasurementUnit.Quilograma},
    {name: "Unitário", value: EMeasurementUnit.Unidade},
    {name: "Litro", value: EMeasurementUnit.Litro},
  ];

  measurement_unit_selected_value = EMeasurementUnit.Quilograma.toString();
  simple_behavior_for_price = 'money';

  

  constructor() { }

  create(){
    console.log(this.dataForm);
  }

  dropdownChange(evt:any){
    this.measurement_unit_selected_value = evt.value.value;
  }

  submit(evt:string){
    console.log(evt);
  }
  ngOnInit(): void {
   
  }

}
