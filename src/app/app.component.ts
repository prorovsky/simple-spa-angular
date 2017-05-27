import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <main>
            <h1>{{pageTitle}}</h1>
            <hotels-list></hotels-list>
        </main>
        `,
    //templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    pageTitle: string = "Отели города N"
}
