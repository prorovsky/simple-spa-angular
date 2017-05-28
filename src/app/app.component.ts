import { Component } from '@angular/core';
import { HotelService } from "./hotels/hotel.service";

@Component({
    selector: 'app-root',
    template: `
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <a class="navbar-brand">{{pageTitle}}</a>
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['/landing']">Главная</a></li>
                    <li><a [routerLink]="['/hotels']">Список Отелей</a></li>
                </ul>
            </div>
        </nav>
        <main class="container">
            <router-outlet></router-outlet>
        </main>
        `,
    //templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ HotelService ]
})
export class AppComponent {
    pageTitle: string = "Отели города N"
}
