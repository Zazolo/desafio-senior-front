import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPagesModule } from './custom-modules/app-pages.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
