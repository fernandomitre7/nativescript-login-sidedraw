"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var HomeComponent = (function () {
    function HomeComponent(routerExtensions, route) {
        this.routerExtensions = routerExtensions;
        this.route = route;
        console.log("Home Component");
    }
    HomeComponent.prototype.goToItems = function () {
        this.routerExtensions.navigate(["items"], { relativeTo: this.route });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "views/main/home/home.component.html",
        styleUrls: ["views/main/home/home.component.css"]
    }),
    __metadata("design:paramtypes", [router_2.RouterExtensions, router_1.ActivatedRoute])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFnRDtBQUNoRCxzREFBK0Q7QUFPL0QsSUFBYSxhQUFhO0lBQ3RCLHVCQUFvQixnQkFBa0MsRUFBVSxLQUFxQjtRQUFqRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHFDQUFxQztRQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztLQUNwRCxDQUFDO3FDQUV3Qyx5QkFBZ0IsRUFBaUIsdUJBQWM7R0FENUUsYUFBYSxDQVF6QjtBQVJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImhvbWVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9tYWluL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1widmlld3MvbWFpbi9ob21lL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSG9tZSBDb21wb25lbnRcIik7XG4gICAgfVxuXG4gICAgZ29Ub0l0ZW1zKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiaXRlbXNcIl0sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcbiAgICB9XG59XG4iXX0=