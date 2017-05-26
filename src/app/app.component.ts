import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <main>
            <h1>{{pageTitle}}</h1>
            <p>Список отелей в городе.</p>
        </main>
        `,
    //templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    pageTitle: string = "Менеджер Отелей"
}
