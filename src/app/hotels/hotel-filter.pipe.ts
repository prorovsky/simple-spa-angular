import { PipeTransform, Pipe } from "@angular/core";
import { IHotel } from "./hotel";

@Pipe({
    name: "hotelFilter"
})
export class HotelFilterPipe implements PipeTransform {

    transform(value: IHotel[], filterBy: string): IHotel[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((hotel: IHotel) =>
            hotel.name.toLocaleLowerCase().includes(filterBy) != false) : value;
    }
}