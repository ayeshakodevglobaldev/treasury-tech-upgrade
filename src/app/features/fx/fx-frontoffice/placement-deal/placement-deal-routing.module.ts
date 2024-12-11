import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacementInputComponent } from './placement-input/placement-input.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'input',
        component:PlacementInputComponent
      },
     
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacementDealRoutingModule { }
