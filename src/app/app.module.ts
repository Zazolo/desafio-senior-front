import { CUSTOM_ELEMENTS_SCHEMA, DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPagesModule } from './custom-modules/app-pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppPagesModule,
  ],
  providers: [CurrencyPipe,
    {
      provide: LOCALE_ID,
      useValue: 'pt'
  },
  {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
