import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from '../pages/list-page/list-page.component';
import { FormPageComponent } from '../pages/form-page/form-page.component';

const APP_PAGES_COMPONENTS = [
  ListPageComponent,
  FormPageComponent
]

@NgModule({
  declarations: [APP_PAGES_COMPONENTS],
  exports:[APP_PAGES_COMPONENTS],
  imports: [
    CommonModule,
    APP_PAGES_COMPONENTS
  ]
})
export class AppPagesModule { }
