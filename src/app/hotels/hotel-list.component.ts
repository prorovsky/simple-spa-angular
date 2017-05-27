import { Component } from "@angular/core";

@Component({
    selector: "hotels-list",
    templateUrl: "./hotel-list.component.html"
})
export class HotelsListComponent {
    pageTitle: string = "Список Отелей";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "";
    hotels: any[] = [
        {
            "hotelId": 1,
            "name": "Как Дома",
            "vacantSuite": 10,
            "address": "ул. Домашняя 7",
            "description": "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло.",
            "price": 49.99,
            "starRating": 3,
            "imageUrl": "./../../assets/hotel1.jpg"
        },
        {
            "hotelId": 2,
            "name": "Гранд Палас",
            "vacantSuite": 19,
            "address": "ул. Саладина 11",
            "description": "Его многочисленные, убого тонкие по сравнению с остальным телом ножки беспомощно копошились у него перед глазами. «Что со мной случилось? » – подумал он. Это не было сном. Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах.",
            "price": 199,
            "starRating": 4.5,
            "imageUrl": "./../../assets/hotel2.jpg"
        },
        {
            "hotelId": 3,
            "name": "Эдем",
            "vacantSuite": 31,
            "address": "ул. Райская 15",
            "description": "Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку. На портрете была изображена дама в меховой шляпе и боа, она сидела очень прямо и протягивала зрителю тяжелую меховую муфту, в которой целиком исчезала ее рука.",
            "price": 299,
            "starRating": 5,
            "imageUrl": "./../../assets/hotel3.jpg"
        },
        {
            "hotelId": 4,
            "name": "Царские Палаты",
            "vacantSuite": 5,
            "address": "пр. Средневековья 24",
            "description": "Затем взгляд Грегора устремился в окно, и пасмурная погода – слышно было, как по жести подоконника стучат капли дождя – привела его и вовсе в грустное настроение. «Хорошо бы еще немного поспать и забыть всю эту чепуху», – подумал он, но это было совершенно неосуществимо, он привык спать на правом боку, а в теперешнем своем состоянии он никак не мог принять этого положения. С какой бы силой ни поворачивался он на правый бок, он неизменно сваливался опять на спину.",
            "price": 99.99,
            "starRating": 3.8,
            "imageUrl": "./../../assets/hotel4.jpg"
        },
        {
            "hotelId": 5,
            "name": "Восточный",
            "vacantSuite": 24,
            "address": "ул. Восходящая 3",
            "description": "Закрыв глаза, чтобы не видеть своих барахтающихся ног, он проделал это добрую сотню раз и отказался от этих попыток только тогда, когда почувствовал какую-то неведомую дотоле, тупую и слабую боль в боку. «Ах ты, господи, – подумал он, – какую я выбрал хлопотную профессию! Изо дня в день в разъездах.",
            "price": 110,
            "starRating": 4,
            "imageUrl": "./../../assets/hotel5.jpg"
        }
    ]

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}