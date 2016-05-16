import {FORM_DIRECTIVES} from '@angular/common';
import {Component} from '@angular/core';

import {CurrencyListService} from '../shared/index';

@Component({
    selector: 'sd-home',
    templateUrl: 'app/+home/home.component.html',
    styleUrls: ['app/+home/home.component.css'],
    providers: [CurrencyListService],

    directives: [FORM_DIRECTIVES]
})
export class HomeComponent {
    amount:any = 555;
    currencyCode:string = 'EUR';
    currencyCodes:[string] = ['CAD', 'EUR', 'INR', 'MXN'];
    notes:any = [];
    bills:any = {};
    urls:any = [];

    constructor(public currencyListService:CurrencyListService) {
    }

    get():string {
        console.log('223');
        return 'aaa;'
    }

    showMoney():any {
        var that = this;
        this.bills = this.currencyListService.getImagesUrls(this.currencyCode, this.amount);
        this.notes = Object.keys(this.bills);
        this.urls = [];
        this.notes.forEach(function (note) {
            var bill = that.bills[note]
            for (var i = 0; i < bill.number; i++) {
                that.urls.push(bill.url);
            }
        });
    }

    /*
     * @param newcurrency  any text as input.
     * @returns return false to prevent default form submit behavior to refresh the page.
     */

}
