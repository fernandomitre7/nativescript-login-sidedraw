import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { SIDEDRAWER_DIRECTIVES } from 'nativescript-telerik-ui/sidedrawer/angular';
import { MainRoutingModule, navigatableComponents } from "./main-routing.module";

import { ItemService } from "./items/item.service";
import { ItemsComponent } from "./items/items.component";
import { ItemDetailComponent } from "./items/item-detail.component";

@NgModule({
    imports: [
        NativeScriptModule,
        MainRoutingModule
    ],
    declarations: [
        SIDEDRAWER_DIRECTIVES,
        ...navigatableComponents
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MainModel { }