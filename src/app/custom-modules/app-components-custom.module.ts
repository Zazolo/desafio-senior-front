import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFormComponent } from '../components/item-form/item-form.component';
import { NavSidebarComponent } from '../components/nav-sidebar/nav-sidebar.component';
import { TableComponent } from '../components/table/table.component';
import { BigButtonComponent } from '../components/big-button/big-button.component';
import { PrimengCustomModule } from './primeng-custom.module';
import { FormsModule } from '@angular/forms';

const CUSTOM_APP_COMPONENTS = [
  ItemFormComponent,
  NavSidebarComponent,
  TableComponent,
  BigButtonComponent,
];


@NgModule({
  declarations: [CUSTOM_APP_COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    PrimengCustomModule
  ],
  exports:[CUSTOM_APP_COMPONENTS]
})
export class AppComponentsCustomModule { }
