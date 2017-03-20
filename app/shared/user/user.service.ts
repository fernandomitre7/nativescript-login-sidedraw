import { Injectable } from "@angular/core";

import { User } from "./user";
import { Config } from "../config";

@Injectable()
export class UserService {

    login(user: User) {
        Config.loggedIn = true;
        Config.loggedUser = user;
    }

    logout() {
        Config.loggedIn = false;
        delete Config.loggedUser;
    }

    isLoggedIn(): boolean {
        return Config.loggedIn;
    }
}