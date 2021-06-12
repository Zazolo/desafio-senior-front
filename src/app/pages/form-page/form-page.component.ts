import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Route } from '@angular/router';
import { EMeasurementUnit } from 'src/app/interfaces/enum/e-measurement-unit';
import { IListTableData } from 'src/app/interfaces/ilist-table-data';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  id:string | null = '123456';

  data:IListTableData|undefined;

  constructor(
    private routeSnap:ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.id = this.routeSnap.snapshot.paramMap.get('id');
    this.routeSnap.url.subscribe((ok)=>{
      //console.log('PATH:', ok.join('/'));  
    })
    
  }

}
