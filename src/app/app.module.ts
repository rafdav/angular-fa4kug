import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatTabsModule, MatTableModule,BrowserAnimationsModule, MatSelectModule ],
  declarations: [ AppComponent, ConsultaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
