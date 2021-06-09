import { Component, Input, OnInit } from '@angular/core';
import { IListTableData } from 'src/app/interfaces/ilist-table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input("data") data:IListTableData | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
