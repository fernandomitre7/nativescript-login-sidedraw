import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { SIDEDRAWER_DIRECTIVES } from 'nativescript-telerik-ui/sidedrawer/angular';
import { AppRoutingModule, navigatableComponents } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./views/items/item.service";
import { ItemsComponent } from "./views/items/items.component";
import { ItemDetailComponent } from "./views/items/item-detail.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        SIDEDRAWER_DIRECTIVES,
        AppComponent,
        ...navigatableComponents
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
