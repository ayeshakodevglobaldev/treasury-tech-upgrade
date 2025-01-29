import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutrightRoutingModule } from './outright-routing.module';
import { InputPurchaseComponent } from './input-purchase/input-purchase.component';
import { SukukVariableComponent } from './sukuk-variable/sukuk-variable.component';
import { SukukFixedComponent } from './sukuk-fixed/sukuk-fixed.component';
import { PibFloaterComponent } from './pib-floater/pib-floater.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { SukukTfcComponent } from './sukuk-tfc/sukuk-tfc.component';
import { PibIssueInputComponent } from './pib-issue-input/pib-issue-input.component';
import { RepoBorrowingInputComponent } from './repo-borrowing-input/repo-borrowing-input.component';
import { PibEditingComponent } from './pib-editing/pib-editing.component';
import { PibNonCompetitiveComponent } from './pib-non-competitive/pib-non-competitive.component';


@NgModule({
  declarations: [
    InputPurchaseComponent,
    SukukVariableComponent,
    SukukFixedComponent,
    PibFloaterComponent,
    SukukTfcComponent,
    PibIssueInputComponent,
    RepoBorrowingInputComponent,
    PibEditingComponent,
    PibNonCompetitiveComponent
  ],
  imports: [
    CommonModule,
    OutrightRoutingModule,
    NgSelectModule,
    SharedModule,
  ],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class OutrightModule { }
