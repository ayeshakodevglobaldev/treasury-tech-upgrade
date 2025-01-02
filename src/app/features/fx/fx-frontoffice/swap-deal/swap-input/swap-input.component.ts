import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl  } from '@angular/forms';

@Component({
  selector: 'app-swap-input',
  templateUrl: './swap-input.component.html',
  styleUrls: ['./swap-input.component.scss']
})
export class SwapInputComponent {
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
      pkrEquivalent: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      we: new FormControl(null, Validators.required),
      blank: new FormControl(null, Validators.required),
      dealtype: new FormControl(null, Validators.required),
      brokerage: new FormControl(null, Validators.required),
      blankB: new FormControl(null, Validators.required),
      LGAdate: new FormControl(null, [Validators.required, this.futureDateValidator]),
      LGBdate: new FormControl(null, [Validators.required, this.futureDateValidator]),
     
      
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
  get we() {
    return this.form.get('we');
  }
  get blank() {
    return this.form.get('blank');
  }
  get dealtype() {
    return this.form.get('dealtype');
  }
  get brokerage() {
    return this.form.get('brokerage');
  }
  get blankB() {
    return this.form.get('blankB');
  }
  get LGAdate() {
    return this.form.get('LGAdate');
  }
  get LGBdate() {
    return this.form.get('LGBdate');
  }
  futureDateValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const inputDate = new Date(control.value);
    const today = new Date();
    today.setHours(2025,-1, 1, 0); // Reset the time portion for comparison

    if (inputDate > today) {
      return { futureDate: true }; // Invalid if the date is in the future
    }
    return null; // Valid date
  };
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

