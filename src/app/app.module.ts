import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { HotelModule } from "./hotels/hotel.module";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HotelModule,
    RouterModule.forRoot([
      {path: "landing", component: LandingComponent},
      {path: "", redirectTo: "landing", pathMatch: "full"},
      {path: "**", redirectTo: "landing", pathMatch: "full"}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
