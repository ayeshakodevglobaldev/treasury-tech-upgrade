import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer-input',
  templateUrl: './transfer-input.component.html',
  styleUrls: ['./transfer-input.component.scss']
})
export class TransferInputComponent {
  active:any;
constructor(){
  console.log("transfer input")
}
}
