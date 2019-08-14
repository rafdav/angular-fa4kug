import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import {MatTabsModule} from '@angular/material/tabs';
//import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ConsultaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
