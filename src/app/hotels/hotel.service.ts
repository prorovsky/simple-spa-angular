import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import { IHotel } from "./hotel";

@Injectable()
export class HotelService {
    private _hotelUrl = "./../../assets/api/hotels/hotels.json";

    constructor(private _http: Http){

    }
    getHotels(): Observable<IHotel[]> {
        return this._http.get(this._hotelUrl)
            .map((response: Response) => <IHotel[]> response.json())
            .do(data => console.log("Все: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "Проблема с сервером");
    }
}