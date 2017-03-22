import { Component, ViewChild, OnInit, ChangeDetectorRef, ElementRef, AfterViewInit } from "@angular/core";
/*import { RadSideDrawer } from "nativescript-telerik-ui/sidedrawer";*/
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from 'nativescript-telerik-ui/sidedrawer';

import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";
import { User } from "../../shared/user/user";

@Component({
    selector: "main",
    templateUrl: "views/main/main.html"/*,
    styleUrls: ["views/main/main-common.css", "views/main/main.css"]*/
})
export class MainComponent implements AfterViewInit, OnInit {
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private _changeDetectionRef: ChangeDetectorRef, private page: Page) {
        console.log("MainComponent");
        page.on("loaded", function (args) {
            console.log("MainComponent page loaded");
            this._sideDrawerTransition = new SlideInOnTopTransition();
        }, this);

    }

    public get sideDrawerTransition() {
        return this._sideDrawerTransition;
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
        if (!this.drawer) {
            this._changeDetectionRef.detectChanges();
            this.drawer = this.drawerComponent.sideDrawer;
        }
    }

    toogleSideDraw() {
        console.log("toogleSideDraw");
        this.drawer.toggleDrawerState();
    }

    ngOnInit() {
        console.log("ngOnInit");
        if (!this.drawer) {
            this._changeDetectionRef.detectChanges();
            this.drawer = this.drawerComponent.sideDrawer;
        }
    }

    public onDrawerOpening() {
        console.log("Drawer opening");

    }

    public onDrawerOpened() {
        console.log("Drawer opened");

    }

    public onDrawerClosing() {
        console.log("Drawer closing");

    }

    public onDrawerClosed() {
        console.log("Drawer closed");

    }


}