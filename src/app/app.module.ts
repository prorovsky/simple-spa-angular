import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HotelsListComponent } from "./hotels/hotel-list.component";
import { HotelFilterPipe } from "./hotels/hotel-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { HotelDetailComponent } from "./hotels/hotel-detail.component";
import { LandingComponent } from "./landing/landing.component";

@NgModule({
  declarations: [
    AppComponent,
    HotelsListComponent,
    StarComponent,
    HotelFilterPipe,
    HotelDetailComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: "hotels", component: HotelsListComponent},
      {path: "hotel/:id", component: HotelDetailComponent},
      {path: "landing", component: LandingComponent},
      {path: "", redirectTo: "landing", pathMatch: "full"},
      {path: "**", redirectTo: "landing", pathMatch: "full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
