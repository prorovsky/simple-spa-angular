import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
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
            .catch(this.handleError);
    }

    getHotel(id: number): Observable<IHotel> {
        return this.getHotels()
            .map((hotels: IHotel[]) => hotels.find(h => h.id == id))
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "Проблема с сервером");
    }
}