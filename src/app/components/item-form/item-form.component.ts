import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  selectedState: any = null;
    
  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];

  state:any = '';

  cities1: any[] = [];
  
  cities2: any[] = [];
  
  city1:any = null;

  city2:any = null;

  value:any;

  

  constructor() { }

  create(){
    console.log(this.dataForm);
  }

  validate(match:string):string{
    function removeZeroEsquerda(str:string){
      let foundNumberDiff0 = false;
      let index = 0;
      while(!foundNumberDiff0){
        if(str[index] == '0'){

        }
      }
    }
    //lt - Allow only 3 decimal numbers
    if(match.length <= 3){
      return "0," + match + "lt";
    } else {
      return match + "lt";
    }
    
    return match;
  }

  ngOnInit(): void {
    this.dataForm.valueChanges.subscribe((form) => {
      if(form.quantity){
        this.dataForm.patchValue({
          //quantity: form.quantity.replace(/^0+(?!$)/g, "")
        }, {emitEvent:false})
      }
    }, )
  }

}
