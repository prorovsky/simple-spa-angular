import { Component } from '@angular/core';
import { HotelService } from "./hotels/hotel.service";

@Component({
    selector: 'app-root',
    template: `
        <main>
            <h1>{{pageTitle}}</h1>
            <hotels-list></hotels-list>
        </main>
        `,
    //templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ HotelService ]
})
export class AppComponent {
    pageTitle: string = "Отели города N"
}
