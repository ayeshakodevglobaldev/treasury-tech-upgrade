import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferInputComponent } from './transfer-input/transfer-input.component';
import { TransferEditingComponent } from './transfer-editing/transfer-editing.component';
import { TransferCancellationComponent } from './transfer-cancellation/transfer-cancellation.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'transfer-input',
        component:TransferInputComponent
      },
      {
      path:'transfer-editing',
      component:TransferEditingComponent
      },
      {
        path:'transfer-cancellation',
        component:TransferCancellationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferDealRoutingModule { }
