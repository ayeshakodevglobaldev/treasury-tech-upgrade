import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutrightAmendmentComponent } from './outright-amendment/outright-amendment.component';
import { OutrightInputComponent } from './outright-input/outright-input.component';
import { OutrightAuthorizeComponent } from './outright-authorize/outright-authorize.component';
import { OutrightCancellationComponent } from './outright-cancellation/outright-cancellation.component';
import { OutrightEditingComponent } from './outright-editing/outright-editing.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'outright-amendment',
        component: OutrightAmendmentComponent,
      },
      {
        path: 'outright-input',
        component: OutrightInputComponent,
      },
      {
        path: 'outright-authorize',
        component: OutrightAuthorizeComponent,
      },
      {
        path: 'outright-cancellation',
        component: OutrightCancellationComponent,
      },
      {
        path: 'outright-editing',
        component: OutrightEditingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutrightDealRoutingModule {}
