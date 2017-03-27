import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./views/login/login.component"
import { MainComponent } from "./views/main/main.component";
import { HomeComponent } from "./views/home/home.component";
import { ItemsComponent } from "./views/items/items.component";
import { ItemDetailComponent } from "./views/items/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    {
        path: "main", component: MainComponent, children: [
            { path: "", component: HomeComponent, outlet: "maincontentoutlet" },
            { path: "items", component: ItemsComponent, outlet: "maincontentoutlet" },
            { path: "items/:id", component: ItemDetailComponent, outlet: "maincontentoutlet" },
        ]
    }
];

export const navigatableComponents = [
    LoginComponent,
    MainComponent,
    HomeComponent,
    ItemsComponent,
    ItemDetailComponent
];
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }