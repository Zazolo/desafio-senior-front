import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Route } from '@angular/router';
import { IListTableData } from 'src/app/interfaces/ilist-table-data';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  id:string | null = '123456';

  form:FormGroup = new FormGroup({
    name: new FormControl(''),
    measurement_unit:new FormControl(''),
    quantity: new FormControl(''),
    price:new FormControl(''),
    perishable:new FormControl(''),
    expiration_date: new FormControl(''),
    manufacturing_date:new FormControl('')

  });

  constructor(
    private routeSnap:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.routeSnap.snapshot.paramMap.get('id');
  }

}
