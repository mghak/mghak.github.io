import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';

import { NameListService } from '../shared/index';
import { CurrencyListService } from '../shared/index';

@Component({
  selector: 'sd-example',
  templateUrl: 'app/+example/example.component.html',
  styleUrls: ['app/+example/example.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class ExampleComponent {
  newName: string;
  constructor(public nameListService: NameListService) {}

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }
}
