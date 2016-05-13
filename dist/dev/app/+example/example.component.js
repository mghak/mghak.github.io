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
var ExampleComponent = (function () {
    function ExampleComponent(nameListService) {
        this.nameListService = nameListService;
    }
    ExampleComponent.prototype.addName = function () {
        this.nameListService.add(this.newName);
        this.newName = '';
        return false;
    };
    ExampleComponent = __decorate([
        core_1.Component({
            selector: 'sd-example',
            templateUrl: 'app/+example/example.component.html',
            styleUrls: ['app/+example/example.component.css'],
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.NameListService])
    ], ExampleComponent);
    return ExampleComponent;
}());
exports.ExampleComponent = ExampleComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rZXhhbXBsZS9leGFtcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFDbEQscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLHNCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBU2xEO0lBRUUsMEJBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFNdkQsa0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQWxCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1lBQ2pELFVBQVUsRUFBRSxDQUFDLHdCQUFlLENBQUM7U0FDOUIsQ0FBQzs7d0JBQUE7SUFjRix1QkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksd0JBQWdCLG1CQWE1QixDQUFBIiwiZmlsZSI6ImFwcC8rZXhhbXBsZS9leGFtcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IEN1cnJlbmN5TGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAvK2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhcHAvK2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVDb21wb25lbnQge1xuICBuZXdOYW1lOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lTGlzdFNlcnZpY2U6IE5hbWVMaXN0U2VydmljZSkge31cblxuICAvKlxuICAgKiBAcGFyYW0gbmV3bmFtZSAgYW55IHRleHQgYXMgaW5wdXQuXG4gICAqIEByZXR1cm5zIHJldHVybiBmYWxzZSB0byBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXQgYmVoYXZpb3IgdG8gcmVmcmVzaCB0aGUgcGFnZS5cbiAgICovXG4gIGFkZE5hbWUoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5uYW1lTGlzdFNlcnZpY2UuYWRkKHRoaXMubmV3TmFtZSk7XG4gICAgdGhpcy5uZXdOYW1lID0gJyc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=
