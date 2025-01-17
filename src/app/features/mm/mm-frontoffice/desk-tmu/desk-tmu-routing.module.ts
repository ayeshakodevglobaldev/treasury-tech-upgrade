import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatesInputComponent } from './rates-input/rates-input.component';

const routes: Routes = [
    {
          path:'',
          children:[
            {
              path:' rates-input',
              component:RatesInputComponent
            },
          
          ]
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeskTmuRoutingModule { }
