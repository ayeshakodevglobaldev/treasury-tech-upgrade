import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutrightDealRoutingModule } from './outright-deal-routing.module';
import { OutrightInputComponent } from './outright-input/outright-input.component';
import { OutrightAuthorizeComponent } from './outright-authorize/outright-authorize.component';
import { OutrightEditingComponent } from './outright-editing/outright-editing.component';
import { OutrightAmendmentComponent } from './outright-amendment/outright-amendment.component';
import { OutrightCancellationComponent } from './outright-cancellation/outright-cancellation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OutrightInputComponent,
    OutrightAuthorizeComponent,
    OutrightEditingComponent,
    OutrightAmendmentComponent,
    OutrightCancellationComponent
  ],
  imports: [
    CommonModule,
    OutrightDealRoutingModule,
    SharedModule
  ]
})
export class OutrightDealModule { }
