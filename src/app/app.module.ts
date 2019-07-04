import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactorialPipe } from './factorial.pipe';
import { FormsModule }   from '@angular/forms';
import { NumberComponent } from './number/number.component';

@NgModule({
  declarations: [
    AppComponent,
    FactorialPipe,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
