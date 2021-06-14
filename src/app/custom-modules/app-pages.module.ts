import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from '../pages/list-page/list-page.component';
import { FormPageComponent } from '../pages/form-page/form-page.component';
import { AppComponentsCustomModule } from './app-components-custom.module';

const APP_PAGES_COMPONENTS = [
  ListPageComponent,
  FormPageComponent
]

@NgModule({
  declarations: [APP_PAGES_COMPONENTS],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    AppComponentsCustomModule
  ],
  exports:[APP_PAGES_COMPONENTS, AppComponentsCustomModule],
})
export class AppPagesModule { }
