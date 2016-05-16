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
        this.amount = 555;
        this.currencyCode = 'EUR';
        this.currencyCodes = ['CAD', 'EUR', 'INR', 'MXN'];
        this.notes = [];
        this.bills = {};
        this.urls = [];
    }
    HomeComponent.prototype.get = function () {
        console.log('223');
        return 'aaa;';
    };
    HomeComponent.prototype.showMoney = function () {
        var that = this;
        this.bills = this.currencyListService.getImagesUrls(this.currencyCode, this.amount);
        this.notes = Object.keys(this.bills);
        this.urls = [];
        this.notes.forEach(function (note) {
            var bill = that.bills[note];
            for (var i = 0; i < bill.number; i++) {
                that.urls.push(bill.url);
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'sd-home',
            templateUrl: 'app/+home/home.component.html',
            styleUrls: ['app/+home/home.component.css'],
            providers: [index_1.CurrencyListService],
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.CurrencyListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHNCQUFrQyxpQkFBaUIsQ0FBQyxDQUFBO0FBVXBEO0lBUUksdUJBQW1CLG1CQUF1QztRQUF2Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBUDFELFdBQU0sR0FBTyxHQUFHLENBQUM7UUFDakIsaUJBQVksR0FBVSxLQUFLLENBQUM7UUFDNUIsa0JBQWEsR0FBWSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RELFVBQUssR0FBTyxFQUFFLENBQUM7UUFDZixVQUFLLEdBQU8sRUFBRSxDQUFDO1FBQ2YsU0FBSSxHQUFPLEVBQUUsQ0FBQztJQUdkLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsTUFBTSxDQUFBO0lBQ2pCLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO1lBQzdCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDM0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbkNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7WUFDM0MsU0FBUyxFQUFFLENBQUMsMkJBQW1CLENBQUM7WUFFaEMsVUFBVSxFQUFFLENBQUMsd0JBQWUsQ0FBQztTQUNoQyxDQUFDOztxQkFBQTtJQW1DRixvQkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1kscUJBQWEsZ0JBa0N6QixDQUFBIiwiZmlsZSI6ImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0N1cnJlbmN5TGlzdFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2QtaG9tZScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvK2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2FwcC8raG9tZS9ob21lLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtDdXJyZW5jeUxpc3RTZXJ2aWNlXSxcblxuICAgIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIGFtb3VudDphbnkgPSA1NTU7XG4gICAgY3VycmVuY3lDb2RlOnN0cmluZyA9ICdFVVInO1xuICAgIGN1cnJlbmN5Q29kZXM6W3N0cmluZ10gPSBbJ0NBRCcsICdFVVInLCAnSU5SJywgJ01YTiddO1xuICAgIG5vdGVzOmFueSA9IFtdO1xuICAgIGJpbGxzOmFueSA9IHt9O1xuICAgIHVybHM6YW55ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY3VycmVuY3lMaXN0U2VydmljZTpDdXJyZW5jeUxpc3RTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgZ2V0KCk6c3RyaW5nIHtcbiAgICAgICAgY29uc29sZS5sb2coJzIyMycpO1xuICAgICAgICByZXR1cm4gJ2FhYTsnXG4gICAgfVxuXG4gICAgc2hvd01vbmV5KCk6YW55IHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB0aGlzLmJpbGxzID0gdGhpcy5jdXJyZW5jeUxpc3RTZXJ2aWNlLmdldEltYWdlc1VybHModGhpcy5jdXJyZW5jeUNvZGUsIHRoaXMuYW1vdW50KTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IE9iamVjdC5rZXlzKHRoaXMuYmlsbHMpO1xuICAgICAgICB0aGlzLnVybHMgPSBbXTtcbiAgICAgICAgdGhpcy5ub3Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub3RlKSB7XG4gICAgICAgICAgICB2YXIgYmlsbCA9IHRoYXQuYmlsbHNbbm90ZV1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmlsbC5udW1iZXI7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoYXQudXJscy5wdXNoKGJpbGwudXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBAcGFyYW0gbmV3Y3VycmVuY3kgIGFueSB0ZXh0IGFzIGlucHV0LlxuICAgICAqIEByZXR1cm5zIHJldHVybiBmYWxzZSB0byBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXQgYmVoYXZpb3IgdG8gcmVmcmVzaCB0aGUgcGFnZS5cbiAgICAgKi9cblxufVxuIl19
