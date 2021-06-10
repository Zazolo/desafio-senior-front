import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route } from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  id:string | null = '123456';

  constructor(
    private routeSnap:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.routeSnap.snapshot.paramMap.get('id');
  }

}
