import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateYourAccountComponent } from './components/create-your-account/create-your-account.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { CreateYourAccount2Component } from './components/create-your-account2/create-your-account2.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateYourAccountComponent,
    ContactPageComponent,
    CreateYourAccount2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
