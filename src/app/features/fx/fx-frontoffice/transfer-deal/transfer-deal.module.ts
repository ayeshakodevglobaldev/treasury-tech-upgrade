import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferDealRoutingModule } from './transfer-deal-routing.module';
import { TransferInputComponent } from './transfer-input/transfer-input.component';
import { TransferCancellationComponent } from './transfer-cancellation/transfer-cancellation.component';
import { TransferEditingComponent } from './transfer-editing/transfer-editing.component';


@NgModule({
  declarations: [
    TransferInputComponent,
    TransferCancellationComponent,
    TransferEditingComponent
  ],
  imports: [
    CommonModule,
    TransferDealRoutingModule
  ]
})
export class TransferDealModule { }
