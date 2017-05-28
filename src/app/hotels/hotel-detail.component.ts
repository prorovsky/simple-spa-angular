import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { IHotel } from "./hotel";

@Component({
    templateUrl: "hotel-detail.component.html"
})
export class HotelDetailComponent implements OnInit {
    pageTitle: string = "Отель";
    hotel: IHotel;

    constructor(private _route: ActivatedRoute,
                private _router: Router){

    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params["id"];
        this.pageTitle += `: ${id}`;
    }

    back(): void {
        this._router.navigate(["/hotels"]);
    }
}