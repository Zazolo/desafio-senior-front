import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    name: new FormControl(''),
    measurement_unit:new FormControl(''),
    quantity: new FormControl(''),
    price:new FormControl(''),
    perishable:new FormControl(''),
    expiration_date: new FormControl(''),
    manufacturing_date:new FormControl(''),
    state: new FormControl('')
  });

  weight_options:EMeasurementUnit[] = Object.values(EMeasurementUnit);


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


  constructor() { }

  create(){}

  validate(){}

  submit(){}

  ngOnInit(): void {
    console.log(this.weight_options);
  }

}
