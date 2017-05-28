import { Component, OnInit } from "@angular/core";
import { IHotel } from "./hotel";
import { HotelService } from "./hotel.service";

@Component({
    selector: "hotels-list",
    templateUrl: "hotel-list.component.html"
})
export class HotelsListComponent implements OnInit {
    pageTitle: string = "Список Отелей";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    hotels: IHotel[];

    constructor(private _hotelService: HotelService){

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._hotelService.getHotels()
            .subscribe(hotels => this.hotels = hotels,
                error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = `Спасибо ваш голос учтен, ${message}`;
    }
}