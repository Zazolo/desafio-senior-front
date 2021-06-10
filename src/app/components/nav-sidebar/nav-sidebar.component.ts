import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent implements OnInit {

  menu = [
    {
      icon: 'pi pi-home',
      routerlink: '/listagem'
    },
    {
      icon: 'pi pi-plus',
      routerlink: '/formulario'
    }
  ]
  ngOnInit() {
      
  }

}
