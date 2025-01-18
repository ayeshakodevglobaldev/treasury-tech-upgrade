import { Component } from '@angular/core';
import { recentActivitiesData, recentCustomersData } from '../../shared/data/dashboard/dashboard';
import * as chartData from '../../shared/data/charts/dashboard';
import { ApexRandomData, RadialBarCircleData } from '../../shared/data/charts/apex';
import { PieChartData } from '../../shared/data/charts/apex';

@Component({
  selector: 'app-mm-dashboard',
  templateUrl: './mm-dashboard.component.html',
  styleUrls: ['./mm-dashboard.component.scss']
})
export class MmDashboardComponent {
 recentActivities = recentActivitiesData;
      recentCustomers = recentCustomersData;
    
      constructor() { }
    
      ngOnInit(): void {
    
      }
      ngAfterViewInit() {
    
      }
    
      public ApexData1:Partial<any> | any = chartData.ApexData1;
      public ApexData2:Partial<any> | any = chartData.ApexData2;
      public ApexData3:Partial<any> | any = chartData.ApexData3;
      public ApexData4:Partial<any> | any = chartData.ApexData4;
      public echartLineBarOption:Partial<any> = chartData.echartLineBarOption;
      public RandomData = ApexRandomData;
      public pieData = PieChartData;
      public radicalbarData = RadialBarCircleData;
}
