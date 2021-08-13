import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IraharaComponent } from './irahara/irahara.component';
import { TokyoComponent } from './tokyo/tokyo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,IraharaComponent, TokyoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
