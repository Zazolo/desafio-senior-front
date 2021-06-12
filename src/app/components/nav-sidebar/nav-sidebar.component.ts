import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router, UrlSegment } from '@angular/router';
@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent implements OnInit {

  menu = [
    {
      icon: 'pi pi-home',
      click: ()=> {this.listagem()},
      name: 'listagem'
    },
    {
      icon: 'pi pi-plus',
      click: ()=> {this.formulario()},
      name: 'formulario'
    }
  ];

  activeRoute = 'listagem';

  ngOnInit() {
      
  }

  constructor(
    private router:Router
  ){
   
  }

  formulario(){
    this.router.navigateByUrl('/formulario');
    this.activeRoute = 'formulario';
  }

  listagem(){
    console.log('clicked');
    this.router.navigateByUrl('/listagem');
    this.activeRoute = 'listagem';
  }

}
