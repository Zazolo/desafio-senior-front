import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MenuModule} from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {InputMaskModule} from 'primeng/inputmask';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import { MessageService } from 'primeng/api';
import {CheckboxModule} from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';


const CUSTOM_PRIMENG_COMPONENTS = [
  ButtonModule,
  TableModule,
  MenuModule,
  FormsModule,
  ReactiveFormsModule,
  DropdownModule,
  InputTextModule,
  CalendarModule,
  ToggleButtonModule,
  InputMaskModule,
  MessageModule,
  MessagesModule,
  CheckboxModule,
  InputNumberModule
  
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CUSTOM_PRIMENG_COMPONENTS
  ],
  exports:[
    CUSTOM_PRIMENG_COMPONENTS
  ],
  providers:[MessageService]
})
export class PrimengCustomModule { }
