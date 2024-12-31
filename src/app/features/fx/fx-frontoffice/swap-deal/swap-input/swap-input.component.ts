import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-swap-input',
  templateUrl: './swap-input.component.html',
  styleUrls: ['./swap-input.component.scss']
})
export class SwapInputComponent {
  // form: FormGroup;
  // constructor(){
  //   console.log("Swap  input")
  //   this.form = new FormGroup({
  //     currencyBuy: new FormControl(null, Validators.required),
  //     buyAmount: new FormControl(null, [Validators.required, Validators.min(0.01)]),
  //   });
  // }

  // onSubmit() {
  //   if (this.form.invalid) {
  //     return;
  //   }

  //   console.log(this.form.value);
  // }
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // Initialize the form with controls and validation rules
    this.form = new FormGroup({
      countryParty: new FormControl(null, Validators.required),
      currencyBuy: new FormControl(null, Validators.required),
      modeDeal: new FormControl(null, Validators.required),
      brokerCode: new FormControl(null, Validators.required),
      currencySell: new FormControl(null, Validators.required),
      buyAmount: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      dealRate: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      inverseRate: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      pkrEquiv: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      sellAmount: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      daysMaturity: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      systemRate: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      directSettle: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      swapPoint: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      Amount: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      brokerageAmount: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      maturitydays: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      Rate: new FormControl(null, [Validators.required, Validators.min(0.01)]),
    });
  }

  // Getter for currencyBuy to simplify template code
  get currencyBuy() {
    return this.form.get('currencyBuy');
  }
  get countryParty() {
    return this.form.get('countryParty');
  }
  get modeDeal() {
    return this.form.get('modeDeal');
  }
  get brokerCode() {
    return this.form.get('brokerCode');
  }
  get currencySell() {
    return this.form.get('currencySell');
  }
  get directSettle() {
    return this.form.get('directSettle');
  }


  // Method called on form submit
  onSubmit(): void {
    // Trigger validation for all fields
    if (this.form.invalid) {
      // If the form is invalid, mark all controls as touched to show errors
      this.form.markAllAsTouched();
      return;
    }
    
    // Handle the form submission logic here if it's valid
    console.log('Form Submitted:', this.form.value);
  }
  
}

