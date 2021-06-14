import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IListTableData } from 'src/app/interfaces/ilist-table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input("data")
  data!: IListTableData[];

  @Output() editAction = new EventEmitter();
  @Output() deleteAction = new EventEmitter();
  
  edit(id:string){
    this.editAction.emit(id);
    
  }

  remove(id:string){
    this.deleteAction.emit(id);
  }

  constructor() { }

}
