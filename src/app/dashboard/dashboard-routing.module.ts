import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MmDashboardComponent } from './mm-dashboard/mm-dashboard.component';

const routes: Routes = [

 {
        path: '',
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'mm-dashboard',
                component: MmDashboardComponent
            },
        ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
