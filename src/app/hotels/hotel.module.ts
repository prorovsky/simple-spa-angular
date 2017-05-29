import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HotelsListComponent } from "./hotel-list.component";
import { HotelDetailComponent } from "./hotel-detail.component";
import { HotelFilterPipe } from "./hotel-filter.pipe";
import { HotelDetailGuard } from "./hotel-guard.service";
import { HotelService } from "./hotel.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        HotelsListComponent,
        HotelDetailComponent,
        HotelFilterPipe,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
             {path: "hotels", component: HotelsListComponent},
             {path: "hotel/:id", 
             canActivate: [HotelDetailGuard],
             component: HotelDetailComponent}
        ])
    ],
    providers: [
        HotelService,
        HotelDetailGuard
    ]
})
export class HotelModule {

}