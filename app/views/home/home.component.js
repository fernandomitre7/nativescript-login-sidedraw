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
        console.log("goToItems");
        this.routerExtensions.navigate(["items"]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "views/home/home.component.html",
        styleUrls: ["views/home/home.component.css"]
    }),
    __metadata("design:paramtypes", [router_2.RouterExtensions, router_1.ActivatedRoute])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFnRDtBQUNoRCxzREFBK0Q7QUFPL0QsSUFBYSxhQUFhO0lBQ3RCLHVCQUFvQixnQkFBa0MsRUFBVSxLQUFxQjtRQUFqRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDL0MsQ0FBQztxQ0FFd0MseUJBQWdCLEVBQWlCLHVCQUFjO0dBRDVFLGFBQWEsQ0FTekI7QUFUWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJob21lXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9ob21lL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSG9tZSBDb21wb25lbnRcIik7XG4gICAgfVxuXG4gICAgZ29Ub0l0ZW1zKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdvVG9JdGVtc1wiKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIml0ZW1zXCJdKTtcbiAgICB9XG59XG4iXX0=