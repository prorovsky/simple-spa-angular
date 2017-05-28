import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HotelsListComponent } from "./hotels/hotel-list.component";
import { HotelFilterPipe } from "./hotels/hotel-filter.pipe";
import { StarComponent } from "./shared/star.component";

@NgModule({
  declarations: [
    AppComponent,
    HotelsListComponent,
    StarComponent,
    HotelFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
