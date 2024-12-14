import { Component } from '@angular/core';

@Component({
  selector: 'app-outright-input',
  templateUrl: './outright-input.component.html',
  styleUrls: ['./outright-input.component.scss']
})
export class OutrightInputComponent {
  constructor() {
    console.log("This is outright input");
  }
  // Options for the dropdown
  bank = ['MCB BANK LIMITED', 'STATE BANK OF PAKISTAN', 'UNITED BANK',];
  currency = ['USD', 'EURO', 'PKR','POUND','DINAR',];
  currencysell = ['USD', 'EURO', 'PKR','POUND','DINAR',];
  dealmode = ['BROKER', 'REUTER', 'FAX','TELEPHONE','TRADER',];
  broker = ["JS GLOBAL CAPITAL",];
  directsell=["YES","NO"];

  // Selected option (Initially null or default text)
  selectedbank: string | null = null;
  selectedcurrency: string | null = null;
  selectedcurrencysell: string | null = null;
  selecteddealmode: string | null = null;
  selectedbroker: string | null = null;
  selecteddirectsell: string | null = null;

  // Method to update selected option
  selectbank(option: string) {
    this.selectedbank = option;
  }
  selectcurrency(option: string) {
    this.selectedcurrency = option;
  }
  selectcurrencysell(option: string) {
    this.selectedcurrencysell = option;
  }
  selectdealmode(option: string) {
    this.selecteddealmode = option;
  }
  selectbroker(option: string) {
    this.selectedbroker = option;
  }
  selectdirectsell(option: string) {
    this.selecteddirectsell = option;
  }
}
