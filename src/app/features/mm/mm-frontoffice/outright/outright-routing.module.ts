import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPurchaseComponent } from './input-purchase/input-purchase.component';
import { PibFloaterComponent } from './pib-floater/pib-floater.component';
import { SukukFixedComponent } from './sukuk-fixed/sukuk-fixed.component';
import { SukukVariableComponent } from './sukuk-variable/sukuk-variable.component';
import { SukukTfcComponent } from './sukuk-tfc/sukuk-tfc.component';

const routes: Routes = [
  {
      path:'',
      children:[
        {
          path:'input-purchase',
          component:InputPurchaseComponent
        },
        {
        path:'pib-floater',
        component:PibFloaterComponent
        },
        {
          path:'sukuk-fixed',
          component:SukukFixedComponent
        },
        {
          path:'sukuk-variable',
          component:SukukVariableComponent
        },
        {
          path:'sukuk-tfc',
          component:SukukTfcComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutrightRoutingModule { }
