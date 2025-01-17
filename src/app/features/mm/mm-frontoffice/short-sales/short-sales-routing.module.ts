import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { InputIssueComponent } from './input-issue/input-issue.component';

const routes: Routes = [
  {
          path:'',
          children:[
            {
              path:'input',
              component:InputComponent
            },
            {
              path:'input-issue',
              component:InputIssueComponent
            },
          ]
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortSalesRoutingModule { }
