import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwapDealRoutingModule } from './swap-deal-routing.module';
import { SwapInputComponent } from './swap-input/swap-input.component';
import { SwapAuthorizeComponent } from './swap-authorize/swap-authorize.component';
import { SwapEditingComponent } from './swap-editing/swap-editing.component';
import { SwapAmendmentComponent } from './swap-amendment/swap-amendment.component';
import { SwapCancellationComponent } from './swap-cancellation/swap-cancellation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    SwapInputComponent,
    SwapAuthorizeComponent,
    SwapEditingComponent,
    SwapAmendmentComponent,
    SwapCancellationComponent
  ],
  imports: [
    CommonModule,
    SwapDealRoutingModule,
    SharedModule,
    NgSelectModule,
  ]
})
export class SwapDealModule { }
