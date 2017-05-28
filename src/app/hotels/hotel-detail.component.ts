import { Component } from "@angular/core";

import { IHotel } from "./hotel";

@Component({
    templateUrl: "hotel-detail.component.html"
})
export class HotelDetailComponent {
    pageTitle: string = "Отель";
    hotel: IHotel;
}