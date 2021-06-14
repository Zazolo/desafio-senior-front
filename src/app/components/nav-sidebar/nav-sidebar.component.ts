import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Route, Router, RouterState, RouterStateSnapshot, UrlSegment } from '@angular/router';
@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent implements OnInit, OnChanges {

  menu = [
    {
      icon: 'pi pi-home',
      click: ()=> {this.listagem()},
      name: '/listagem'
    },
    {
      icon: 'pi pi-plus',
      click: ()=> {this.formulario()},
      name: '/formulario'
    }
  ];

  activeRoute = '/listagem';

  ngOnInit() {
    this.activeRoute = window.location.pathname;
  }

  constructor(
    private router:Router,
  ){
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

  formulario(){
    this.router.navigateByUrl('/formulario');
    this.activeRoute = '/formulario';

  }

  listagem(){
    this.router.navigateByUrl('/listagem');
    this.activeRoute = '/listagem';
  }

}
