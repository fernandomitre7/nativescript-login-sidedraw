import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

@Component({
    selector: "my-app",
    providers: [UserService],
    templateUrl: "views/login/login.html",
    styleUrls: ["views/login/login-common.css", "views/login/login.css"]
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn = true;

    @ViewChild("email") email: ElementRef;
    @ViewChild("password") password: ElementRef;

    constructor(private router: Router, private userService: UserService, private page: Page) {
        this.user = new User();
        // For Dev
        this.user.email = "fernando@nativescript.com";
        this.user.password = "qwerty";
    }
    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundColor = new Color("#009688");
    }
    submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }
    login() {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        this.userService.login(this.user);
        this.router.navigate(["/main"])
    }
    signUp() {

    }
    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
}