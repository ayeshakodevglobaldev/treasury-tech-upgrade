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
    { id: 1, name: 'Brazil' },
    { id: 1, name: 'Czech Republic' },
    { id: 1, name: 'Germany' },
    { id: 1, name: 'Poland' },
  ]
}
