import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HotelsListComponent } from "./hotels/hotel-list.component";
import { HotelFilterPipe } from "./hotels/hotel-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HotelsListComponent,
    HotelFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
