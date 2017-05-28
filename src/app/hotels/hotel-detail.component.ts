import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { IHotel } from "./hotel";
import { HotelService } from "./hotel.service";

@Component({
    templateUrl: "hotel-detail.component.html",
    styleUrls: ["hotel-detail.component.css"]
})
export class HotelDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = "Отель";
    hotel: IHotel;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _hotelService: HotelService){

    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params["id"];
                this.getHotel(id);
            });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getHotel(id: number): void {
        this._hotelService.getHotel(id).subscribe(
            hotel => this.hotel = hotel,
            error => this.errorMessage = <any>error);
    }

    back(): void {
        this._router.navigate(["/hotels"]);
    }
}