import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MenuModule} from 'primeng/menu';


const CUSTOM_PRIMENG_COMPONENTS = [
  ButtonModule,
  TableModule,
  MenuModule,
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CUSTOM_PRIMENG_COMPONENTS
  ],
  exports:[
    CUSTOM_PRIMENG_COMPONENTS
  ]
})
export class PrimengCustomModule { }
