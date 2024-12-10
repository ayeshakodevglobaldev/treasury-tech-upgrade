import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwapInputComponent } from './swap-input/swap-input.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'swap-input',
        component: SwapInputComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwapDealRoutingModule {}
