import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutrightRoutingModule } from './outright-routing.module';
import { InputPurchaseComponent } from './input-purchase/input-purchase.component';
import { SukukVariableComponent } from './sukuk-variable/sukuk-variable.component';
import { SukukFixedComponent } from './sukuk-fixed/sukuk-fixed.component';
import { PibFloaterComponent } from './pib-floater/pib-floater.component';


@NgModule({
  declarations: [
    InputPurchaseComponent,
    SukukVariableComponent,
    SukukFixedComponent,
    PibFloaterComponent
  ],
  imports: [
    CommonModule,
    OutrightRoutingModule
  ]
})
export class OutrightModule { }
