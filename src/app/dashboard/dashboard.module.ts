import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MmDashboardComponent } from './mm-dashboard/mm-dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MmDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgbModule,
    NgApexchartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NgScrollbarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
