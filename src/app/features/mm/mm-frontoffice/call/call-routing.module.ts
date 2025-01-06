import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {
        path:'',
        children:[
          {
            path:'call-input',
            component:InputComponent
          },
        
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallRoutingModule { }
