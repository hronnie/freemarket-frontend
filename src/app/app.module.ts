import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { LoginRegModule } from './login-reg/login-reg.module';

import { AppComponent } from './app.component';
//import { LoginComponent } from './login-reg/login/login.component';


@NgModule({
  declarations: [
    AppComponent//,
    //LoginComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    LoginRegModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
