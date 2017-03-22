"use strict";
var core_1 = require("@angular/core");
/*import { RadSideDrawer } from "nativescript-telerik-ui/sidedrawer";*/
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var page_1 = require("ui/page");
var MainComponent = (function () {
    function MainComponent(_changeDetectionRef, page) {
        this._changeDetectionRef = _changeDetectionRef;
        this.page = page;
        console.log("MainComponent");
        page.on("loaded", function (args) {
            console.log("MainComponent page loaded");
            this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        }, this);
    }
    Object.defineProperty(MainComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    MainComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
        if (!this.drawer) {
            this._changeDetectionRef.detectChanges();
            this.drawer = this.drawerComponent.sideDrawer;
        }
    };
    MainComponent.prototype.toogleSideDraw = function () {
        console.log("toogleSideDraw");
        this.drawer.toggleDrawerState();
    };
    MainComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        if (!this.drawer) {
            this._changeDetectionRef.detectChanges();
            this.drawer = this.drawerComponent.sideDrawer;
        }
    };
    MainComponent.prototype.onDrawerOpening = function () {
        console.log("Drawer opening");
    };
    MainComponent.prototype.onDrawerOpened = function () {
        console.log("Drawer opened");
    };
    MainComponent.prototype.onDrawerClosing = function () {
        console.log("Drawer closing");
    };
    MainComponent.prototype.onDrawerClosed = function () {
        console.log("Drawer closed");
    };
    return MainComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], MainComponent.prototype, "drawerComponent", void 0);
MainComponent = __decorate([
    core_1.Component({
        selector: "main",
        templateUrl: "views/main/main.html" /*,
        styleUrls: ["views/main/main-common.css", "views/main/main.css"]*/
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, page_1.Page])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJHO0FBQzNHLHVFQUF1RTtBQUN2RSxzRUFBb0c7QUFDcEcsaUVBQWtHO0FBRWxHLGdDQUErQjtBQVcvQixJQUFhLGFBQWE7SUFLdEIsdUJBQW9CLG1CQUFzQyxFQUFVLElBQVU7UUFBMUQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLElBQUk7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7UUFDOUQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWIsQ0FBQztJQUVELHNCQUFXLCtDQUFvQjthQUEvQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUNsRCxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDbEQsQ0FBQztJQUNMLENBQUM7SUFFTSx1Q0FBZSxHQUF0QjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUVsQyxDQUFDO0lBRU0sc0NBQWMsR0FBckI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRWpDLENBQUM7SUFFTSx1Q0FBZSxHQUF0QjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUVsQyxDQUFDO0lBRU0sc0NBQWMsR0FBckI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRWpDLENBQUM7SUFHTCxvQkFBQztBQUFELENBQUMsQUE1REQsSUE0REM7QUEzRHNDO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQXlCLGdDQUFzQjtzREFBQztBQUR6RSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsc0JBQXNCLENBQUE7MEVBQytCO0tBQ3JFLENBQUM7cUNBTTJDLHdCQUFpQixFQUFnQixXQUFJO0dBTHJFLGFBQWEsQ0E0RHpCO0FBNURZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuLyppbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXJcIjsqL1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xuXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJtYWluXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbWFpbi9tYWluLmh0bWxcIi8qLFxuICAgIHN0eWxlVXJsczogW1widmlld3MvbWFpbi9tYWluLWNvbW1vbi5jc3NcIiwgXCJ2aWV3cy9tYWluL21haW4uY3NzXCJdKi9cbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNYWluQ29tcG9uZW50XCIpO1xuICAgICAgICBwYWdlLm9uKFwibG9hZGVkXCIsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1haW5Db21wb25lbnQgcGFnZSBsb2FkZWRcIik7XG4gICAgICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ0FmdGVyVmlld0luaXRcIik7XG4gICAgICAgIGlmICghdGhpcy5kcmF3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b29nbGVTaWRlRHJhdygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b29nbGVTaWRlRHJhd1wiKTtcbiAgICAgICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ09uSW5pdFwiKTtcbiAgICAgICAgaWYgKCF0aGlzLmRyYXdlcikge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkRyYXdlck9wZW5pbmcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJhd2VyIG9wZW5pbmdcIik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EcmF3ZXJPcGVuZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJhd2VyIG9wZW5lZFwiKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvbkRyYXdlckNsb3NpbmcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJhd2VyIGNsb3NpbmdcIik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EcmF3ZXJDbG9zZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJhd2VyIGNsb3NlZFwiKTtcblxuICAgIH1cblxuXG59Il19