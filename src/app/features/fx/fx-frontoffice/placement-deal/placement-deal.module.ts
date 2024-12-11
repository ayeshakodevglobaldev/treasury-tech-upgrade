import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementDealRoutingModule } from './placement-deal-routing.module';
import { PlacementInputComponent } from './placement-input/placement-input.component';


@NgModule({
  declarations: [
    PlacementInputComponent
  ],
  imports: [
    CommonModule,
    PlacementDealRoutingModule
  ]
})
export class PlacementDealModule { }
