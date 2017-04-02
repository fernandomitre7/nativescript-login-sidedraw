"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var main_component_1 = require("./main.component");
var home_component_1 = require("./home/home.component");
var items_component_1 = require("./items/items.component");
var item_detail_component_1 = require("./items/item-detail.component");
var routes = [
    {
        path: "main", component: main_component_1.MainComponent, children: [
            // '/main' loaded into 'router-outlet' inside MainComponent view
            { path: "", component: home_component_1.HomeComponent },
            // '/main/items' loaded into 'router-outlet' inside MainComponent view
            { path: "items", component: items_component_1.ItemsComponent },
            { path: "items/:id", component: item_detail_component_1.ItemDetailComponent }
        ]
    }
];
exports.navigatableComponents = [
    main_component_1.MainComponent,
    home_component_1.HomeComponent,
    items_component_1.ItemsComponent,
    item_detail_component_1.ItemDetailComponent
];
var MainRoutingModule = (function () {
    function MainRoutingModule() {
    }
    return MainRoutingModule;
}());
MainRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forChild(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], MainRoutingModule);
exports.MainRoutingModule = MainRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsbURBQWlEO0FBQ2pELHdEQUFzRDtBQUN0RCwyREFBeUQ7QUFDekQsdUVBQW9FO0FBRXBFLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxRQUFRLEVBQUU7WUFDOUMsZ0VBQWdFO1lBQ2hFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtZQUN0QyxzRUFBc0U7WUFDdEUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO1lBQzVDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7U0FDeEQ7S0FDSjtDQUNKLENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ2pDLDhCQUFhO0lBQ2IsOEJBQWE7SUFDYixnQ0FBYztJQUNkLDJDQUFtQjtDQUN0QixDQUFDO0FBS0YsSUFBYSxpQkFBaUI7SUFBOUI7SUFBaUMsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUFsQyxJQUFrQztBQUFyQixpQkFBaUI7SUFKN0IsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3RDLENBQUM7R0FDVyxpQkFBaUIsQ0FBSTtBQUFyQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tIFwiLi9tYWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbXMvaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbXMvaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogXCJtYWluXCIsIGNvbXBvbmVudDogTWFpbkNvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIC8vICcvbWFpbicgbG9hZGVkIGludG8gJ3JvdXRlci1vdXRsZXQnIGluc2lkZSBNYWluQ29tcG9uZW50IHZpZXdcbiAgICAgICAgICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICAgICAgICAvLyAnL21haW4vaXRlbXMnIGxvYWRlZCBpbnRvICdyb3V0ZXItb3V0bGV0JyBpbnNpZGUgTWFpbkNvbXBvbmVudCB2aWV3XG4gICAgICAgICAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcIml0ZW1zLzppZFwiLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcbiAgICBNYWluQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgSXRlbXNDb21wb25lbnQsXG4gICAgSXRlbURldGFpbENvbXBvbmVudFxuXTtcbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluUm91dGluZ01vZHVsZSB7IH0iXX0=