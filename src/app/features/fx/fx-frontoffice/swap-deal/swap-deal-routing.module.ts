import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwapInputComponent } from './swap-input/swap-input.component';
import { SwapAmendmentComponent } from './swap-amendment/swap-amendment.component';
import { SwapAuthorizeComponent } from './swap-authorize/swap-authorize.component';
import { SwapCancellationComponent } from './swap-cancellation/swap-cancellation.component';
import { SwapEditingComponent } from './swap-editing/swap-editing.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'swap-input',
        component: SwapInputComponent,
      },
      {
        path:'swap-amendment',
        component:SwapAmendmentComponent
      },
      {
        path:'swap-authorize',
        component:SwapAuthorizeComponent
      },
      {
        path:'swap-cancellation',
        component:SwapCancellationComponent
      },
      {
        path:'swap-editing',
        component:SwapEditingComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwapDealRoutingModule {}
