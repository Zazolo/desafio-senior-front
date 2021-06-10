import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

const CUSTOM_PRIMENG_COMPONENTS = [
  ButtonModule,
  TableModule
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
