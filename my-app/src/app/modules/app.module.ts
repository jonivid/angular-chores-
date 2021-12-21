import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '../components/home/home.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { PracticePipe } from '../pipes/practice.pipe';
import { FormsModule } from '@angular/forms';
import { PricePipe } from '../pipes/price.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    PracticePipe,
    PricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
