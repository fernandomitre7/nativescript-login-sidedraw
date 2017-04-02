import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router"
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "home",
    templateUrl: "views/main/home/home.component.html",
    styleUrls: ["views/main/home/home.component.css"]
})
export class HomeComponent {
    constructor(private routerExtensions: RouterExtensions, private route: ActivatedRoute) {
        console.log("Home Component");
    }

    goToItems() {
        this.routerExtensions.navigate(["items"], { relativeTo: this.route });
    }
}
