import { Component, Input, OnInit } from '@angular/core';
import { IListTableData } from 'src/app/interfaces/ilist-table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input("data") data:IListTableData[] = [{
    name:'Carrinho',
    expiration_date: new Date(),
    manufacturing_date: new Date(),
    perishable: true,
    measurement_unit: {value: 'un', name: 'Unidade'},
    price: 6541,
    id: 'adr2326131e896',
    quantity: 56
    
  }];
  
  edit(id:string){
    console.log('RECEBEU:', id);
  }

  remove(id:string){
    console.log('RECEBEU:', id);
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
