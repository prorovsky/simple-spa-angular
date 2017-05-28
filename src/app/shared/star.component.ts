import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "star-shared",
    templateUrl: "star.component.html",
    styleUrls: ["star.component.css"]
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 96 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`сейчас рейтинг отеля ${this.rating}`);
    }
}