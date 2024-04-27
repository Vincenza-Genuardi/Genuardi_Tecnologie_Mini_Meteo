import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { TODAYComponent } from './today/today.component';
import { WEEKLYComponent } from './weekly/weekly.component';
import { INFORMAZIONIComponent } from './informazioni/informazioni.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    TODAYComponent,
    WEEKLYComponent,
    INFORMAZIONIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
