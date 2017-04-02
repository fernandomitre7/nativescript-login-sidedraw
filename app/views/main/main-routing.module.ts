import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { MainComponent } from "./main.component";
import { HomeComponent } from "./home/home.component";
import { ItemsComponent } from "./items/items.component";
import { ItemDetailComponent } from "./items/item-detail.component";

const routes: Routes = [
    {
        path: "main", component: MainComponent, children: [
            // '/main' loaded into 'router-outlet' inside MainComponent view
            { path: "", component: HomeComponent },
            // '/main/items' loaded into 'router-outlet' inside MainComponent view
            { path: "items", component: ItemsComponent },
            { path: "items/:id", component: ItemDetailComponent }
        ]
    }
];

export const navigatableComponents = [
    MainComponent,
    HomeComponent,
    ItemsComponent,
    ItemDetailComponent
];
@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MainRoutingModule { }