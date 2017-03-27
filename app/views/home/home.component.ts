import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router"
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "home",
    templateUrl: "views/home/home.component.html",
    styleUrls: ["views/home/home.component.css"]
})
export class HomeComponent {
    constructor(private routerExtensions: RouterExtensions, private route: ActivatedRoute) {
        console.log("Home Component");
    }

    goToItems() {
        console.log("goToItems");
        this.routerExtensions.navigate(["items"]);
    }
}
