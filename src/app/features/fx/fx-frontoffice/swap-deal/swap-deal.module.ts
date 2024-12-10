import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwapDealRoutingModule } from './swap-deal-routing.module';
import { SwapInputComponent } from './swap-input/swap-input.component';


@NgModule({
  declarations: [
    SwapInputComponent
  ],
  imports: [
    CommonModule,
    SwapDealRoutingModule
  ]
})
export class SwapDealModule { }
