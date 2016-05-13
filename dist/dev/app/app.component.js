"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('./+about/index');
var index_2 = require('./+home/index');
var index_3 = require('./+example/index');
var index_4 = require('./shared/index');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'sd-app',
            viewProviders: [index_4.NameListService],
            templateUrl: 'app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, index_4.NavbarComponent, index_4.ToolbarComponent]
        }),
        router_1.Routes([
            {
                path: '/',
                component: index_2.HomeComponent
            },
            {
                path: '/example',
                component: index_3.ExampleComponent
            },
            {
                path: '/about',
                component: index_1.AboutComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsc0JBQStCLGdCQUFnQixDQUFDLENBQUE7QUFDaEQsc0JBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLHNCQUFpQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQ3BELHNCQUFtRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBc0JwRjtJQUFBO0lBQTJCLENBQUM7SUFwQjVCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLGFBQWEsRUFBRSxDQUFDLHVCQUFlLENBQUM7WUFDaEMsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx1QkFBZSxFQUFFLHdCQUFnQixDQUFDO1NBQ25FLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDTjtnQkFDRSxJQUFJLEVBQUUsR0FBRztnQkFDVCxTQUFTLEVBQUUscUJBQWE7YUFDekI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLHdCQUFnQjthQUM1QjtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxzQkFBYzthQUMxQjtTQUNGLENBQUM7O29CQUFBO0lBQ3lCLG1CQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLG9CQUFZLGVBQUcsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi8rYWJvdXQvaW5kZXgnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vK2hvbWUvaW5kZXgnO1xuaW1wb3J0IHsgRXhhbXBsZUNvbXBvbmVudCB9IGZyb20gJy4vK2V4YW1wbGUvaW5kZXgnO1xuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlLCBOYXZiYXJDb21wb25lbnQsIFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NkLWFwcCcsXG4gIHZpZXdQcm92aWRlcnM6IFtOYW1lTGlzdFNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE5hdmJhckNvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudF1cbn0pXG5AUm91dGVzKFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvZXhhbXBsZScsXG4gICAgY29tcG9uZW50OiBFeGFtcGxlQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2Fib3V0JyxcbiAgICBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50XG4gIH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHt9XG4iXX0=
