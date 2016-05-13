import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';

import { CurrencyListService } from '../shared/index';

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+home/home.component.html',
  styleUrls: ['app/+home/home.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class HomeComponent {
  newCurrency: string;
  constructor(public currencyListService: CurrencyListService) {}

  /*
   * @param newcurrency  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addCurrency(): boolean {
    this.currencyListService.add(this.newCurrency);
    this.newCurrency = '';
    return false;
  }
}
