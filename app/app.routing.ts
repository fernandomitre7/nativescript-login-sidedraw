import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./views/login/login.component"
import { MainComponent } from "./views/main/main.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: "", component: LoginComponent },
    {
        path: "main", component: MainComponent, children: [
            { path: "items", component: ItemsComponent, outlet: "maincontentoutlet" },
            { path: "item/:id", component: ItemDetailComponent, outlet: "maincontentoutlet" },
        ]
    }
];

export const navigatableComponents = [
    LoginComponent,
    MainComponent,
    ItemsComponent,
    ItemDetailComponent
];
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }