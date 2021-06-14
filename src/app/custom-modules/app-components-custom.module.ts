import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFormComponent } from '../components/item-form/item-form.component';
import { NavSidebarComponent } from '../components/nav-sidebar/nav-sidebar.component';
import { TableComponent } from '../components/table/table.component';
import { PrimengCustomModule } from './primeng-custom.module';
import { FormsModule } from '@angular/forms';

const CUSTOM_APP_COMPONENTS = [
  ItemFormComponent,
  NavSidebarComponent,
  TableComponent,
];


@NgModule({
  declarations: [CUSTOM_APP_COMPONENTS],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    PrimengCustomModule
  ],
  exports:[CUSTOM_APP_COMPONENTS]
})
export class AppComponentsCustomModule { }
