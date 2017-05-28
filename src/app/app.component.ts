import { Component } from '@angular/core';
import { HotelService } from "./hotels/hotel.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ HotelService ]
})
export class AppComponent {
    pageTitle: string = "Cool Hotels"
}
