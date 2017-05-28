import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: "landing.component.html",
    styles: ["* { text-align: center }"]
})
export class LandingComponent {
    
    constructor(private _router: Router){

    }

    goToList(): void {
        this._router.navigate(["/hotels"]);
    }
}