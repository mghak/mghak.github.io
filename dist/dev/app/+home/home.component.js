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
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var index_1 = require('../shared/index');
var HomeComponent = (function () {
    function HomeComponent(currencyListService) {
        this.currencyListService = currencyListService;
    }
    HomeComponent.prototype.addCurrency = function () {
        this.currencyListService.add(this.newCurrency);
        this.newCurrency = '';
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'sd-home',
            templateUrl: 'app/+home/home.component.html',
            styleUrls: ['app/+home/home.component.css'],
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof index_1.CurrencyListService !== 'undefined' && index_1.CurrencyListService) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFDbEQscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLHNCQUFvQyxpQkFBaUIsQ0FBQyxDQUFBO0FBUXREO0lBRUUsdUJBQW1CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQUcsQ0FBQztJQU0vRCxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFsQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztZQUMzQyxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxDQUFDO1NBQzlCLENBQUM7O3FCQUFBO0lBY0Ysb0JBQUM7O0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxxQkFBYSxnQkFhekIsQ0FBQSIsImZpbGUiOiJhcHAvK2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEN1cnJlbmN5TGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAvK2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhcHAvK2hvbWUvaG9tZS5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICBuZXdDdXJyZW5jeTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY3VycmVuY3lMaXN0U2VydmljZTogQ3VycmVuY3lMaXN0U2VydmljZSkge31cblxuICAvKlxuICAgKiBAcGFyYW0gbmV3Y3VycmVuY3kgIGFueSB0ZXh0IGFzIGlucHV0LlxuICAgKiBAcmV0dXJucyByZXR1cm4gZmFsc2UgdG8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWl0IGJlaGF2aW9yIHRvIHJlZnJlc2ggdGhlIHBhZ2UuXG4gICAqL1xuICBhZGRDdXJyZW5jeSgpOiBib29sZWFuIHtcbiAgICB0aGlzLmN1cnJlbmN5TGlzdFNlcnZpY2UuYWRkKHRoaXMubmV3Q3VycmVuY3kpO1xuICAgIHRoaXMubmV3Q3VycmVuY3kgPSAnJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==
