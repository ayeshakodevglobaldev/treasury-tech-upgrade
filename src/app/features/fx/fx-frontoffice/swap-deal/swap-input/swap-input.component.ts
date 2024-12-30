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
      buyAmount: new FormControl(null, [Validators.required, Validators.min(0.01)]),
    });
  }

  // Getter for currencyBuy to simplify template code
  get currencyBuy() {
    return this.form.get('currencyBuy');
  }
  get countryParty() {
    return this.form.get('countryParty');
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

