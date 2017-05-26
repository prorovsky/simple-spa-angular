import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { HotelsListComponent } from "./hotels/hotel-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HotelsListComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
