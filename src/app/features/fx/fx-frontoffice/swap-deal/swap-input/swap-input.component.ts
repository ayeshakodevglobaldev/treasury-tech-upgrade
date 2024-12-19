import { Component } from '@angular/core';

@Component({
  selector: 'app-swap-input',
  templateUrl: './swap-input.component.html',
  styleUrls: ['./swap-input.component.scss']
})
export class SwapInputComponent {
  constructor(){
    console.log("Swap  input")
  }
  
  ngOnInit(): void {
  }
  countries = [
    { id: 1, name: 'MCB Bank Limited' },
    { id: 1, name: 'State Bank Of Pakistan' },
    { id: 1, name: 'United Bank' },
    { id: 1, name: 'Treasury Client' },
  ]
  currencies = [
    { id: 1, name: 'Dollar ($)' },
    { id: 1, name: 'Pound (£)' },
    { id: 1, name: 'Euro (€)' },
    { id: 1, name: 'Riyal (﷼)' },
    { id: 1, name: 'Dinnar (د.ك)' },
  ]
  deals = [
    { id: 1, name: 'Broker' },
    { id: 1, name: 'Reuter' },
    { id: 1, name: 'Telephone' },
    { id: 1, name: 'Fax' },
    { id: 1, name: 'Trade' },
  ]
  brokers = [
    { id: 1, name: 'Js Global Capital' },
    
  ]
  // TS for right section
  currencysells = [
    { id: 1, name: 'Dollar ($)' },
    { id: 1, name: 'Pound (£)' },
    { id: 1, name: 'Euro (€)' },
    { id: 1, name: 'Riyal (﷼)' },
    { id: 1, name: 'Dinnar (د.ك)' },
  ]
  direct = [
    { id: 1, name: 'Yes' },
    { id: 1, name: 'No' },
    
  ]
}
