import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengCustomModule } from './custom-modules/primeng-custom.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { TableComponent } from './components/table/table.component';
import { BigButtonComponent } from './components/big-button/big-button.component';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { FormPageComponent } from './pages/form-page/form-page.component';



@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    TableComponent,
    BigButtonComponent,
    NavSidebarComponent,
    FormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengCustomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
