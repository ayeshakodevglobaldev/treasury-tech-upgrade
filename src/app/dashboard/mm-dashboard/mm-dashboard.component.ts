import { Component } from '@angular/core';
import {
  recentActivitiesData,
  recentCustomersData,
} from '../../shared/data/dashboard/dashboard';
import * as chartData from '../../shared/data/charts/dashboard';
import {
  ApexRandomData,
  RadialBarCircleData,
} from '../../shared/data/charts/apex';
import { PieChartData } from '../../shared/data/charts/apex';
import {
  MMDashboard,
  DashboardService,
} from '../../shared/services/dashboard.service';
@Component({
  selector: 'app-mm-dashboard',
  templateUrl: './mm-dashboard.component.html',
  styleUrls: ['./mm-dashboard.component.scss'],
})
export class MmDashboardComponent {
  recentActivities = recentActivitiesData;
  recentCustomers = recentCustomersData;
  dashboardData: MMDashboard | null = null;
  chartOptionsHFT: any;
  chartOptionsAFS: any;
  chartOptionsGTotal: any;
  chartOptionsHFTMTM: any;
  chartOptionsAFSMTM: any;
  chartOptionsGTotalMTM: any;
  chartOptionsTodayDeals: any;
  chartOptionsForwardDeals: any;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe((data) => {
      this.dashboardData = data;
      console.log('this.dashboardData==>', this.dashboardData);
    });
    this.initializeChart();
  }

  ngAfterViewInit() {}

  public ApexData1: Partial<any> | any = chartData.ApexData1;
  public ApexData2: Partial<any> | any = chartData.ApexData2;
  public ApexData3: Partial<any> | any = chartData.ApexData3;
  public ApexData4: Partial<any> | any = chartData.ApexData4;
  public echartLineBarOption: Partial<any> = chartData.echartLineBarOption;
  public RandomData = ApexRandomData;
  public pieData = PieChartData;
  public radicalbarData = RadialBarCircleData;

  initializeChart() {
    // HFT Chart
    //  this.chartOptionsHFT = {
    //   series: [
    //     {
    //       name: 'Face Value',
    //       data: [
    //         this.dashboardData?.HFTData.tdyFaceValueTBills,
    //         this.dashboardData?.HFTData.tdyFaceValuePIBs,
    //         this.dashboardData?.HFTData.tdyFaceValueSukuk
    //       ]
    //     }
    //   ],
    //   chart: { type: 'bar', height: 350 },
    //   xaxis: { categories: ['T-Bills', 'PIBs', 'Sukuk'] },
    //   title: { text: 'HFT Data - Face Value' }
    // };
    this.chartOptionsHFT = {
      series: [
        this.dashboardData?.HFTData.tdyFaceValueTBills,
        this.dashboardData?.HFTData.tdyFaceValuePIBs,
        this.dashboardData?.HFTData.tdyFaceValueSukuk,
      ],
      colors: ['#b8094c', '#095eb8', '#2dce89'],
      chart: {
        type: 'pie',
        height: 350,
      },
      labels: ['T-Bills', 'PIBs', 'Sukuk'],
      title: {
        text: 'HFT Data - Face Value',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
    // AFS Chart
    this.chartOptionsAFS = {
      series: [
        this.dashboardData?.AFS.tdyFaceValueTBills,
        this.dashboardData?.AFS.tdyFaceValuePIBs,
        this.dashboardData?.AFS.tdyFaceValueSukuk,
      ],
      colors: ['#705ec8', '#b8094c', '#095eb8'],
      chart: { type: 'pie', height: 350 },
      labels: ['T-Bills', 'PIBs', 'Sukuk'],
      title: { text: 'AFS Data - Face Value' },
    };

    // GTotal Chart
    this.chartOptionsGTotal = {
      series: [
        this.dashboardData?.GTotal.tdyFaceValueTBills,
        this.dashboardData?.GTotal.tdyFaceValuePIBs,
        this.dashboardData?.GTotal.tdyFaceValueSukuk,
      ],
      colors: ['#095eb8', '#2dce89', '#b8094c'],
      chart: { type: 'pie', height: 350 },
      labels: ['T-Bills', 'PIBs', 'Sukuk'],
      title: { text: 'Grand Total - Face Value' },
    };

    // Ready-Today Deals Chart
    this.chartOptionsTodayDeals = {
      series: [
        {
          name: 'Purchases',
          data: [
            this.dashboardData?.rdyTdyDeals.tbillsPurchase ?? 0,
            this.dashboardData?.rdyTdyDeals.pibsPurchase ?? 0,
            this.dashboardData?.rdyTdyDeals.sukukPurchase ?? 0,
          ],
        },
        {
          name: 'Sales',
          data: [
            this.dashboardData?.rdyTdyDeals.tbillsSale ?? 0,
            this.dashboardData?.rdyTdyDeals.pibsSale ?? 0,
            this.dashboardData?.rdyTdyDeals.sukukSale ?? 0,
          ],
        },
      ],
      colors: ['#705ec8', '#fa057a'],
      chart: { type: 'bar', height: 350, stacked: true },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      xaxis: {
        categories: ['T-Bills Rdy', 'PIBs Rdy', 'Sukuk Rdy'],
        labels: {
          formatter: function (val: string) {
            return val;
          },
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      title: { text: 'Today Deals' },

      fill: {
        opacity: 1,
      },
      legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
      dataLabels: {
        enabled: false,
      },
    };

    // Forward Deals Chart
    this.chartOptionsForwardDeals = {
      series: [
        {
          name: 'Purchases',
          data: [
            this.dashboardData?.fwdForwardDeals.tbillsPurchase ?? 0,
            this.dashboardData?.fwdForwardDeals.pibsPurchase ?? 0,
            this.dashboardData?.fwdForwardDeals.sukukPurchase ?? 0,
          ],
        },
        {
          name: 'Sales',
          data: [
            this.dashboardData?.fwdForwardDeals.tbillsSale ?? 0,
            this.dashboardData?.fwdForwardDeals.pibsSale ?? 0,
            this.dashboardData?.fwdForwardDeals.sukukSale ?? 0,
          ],
        },
      ],
      colors: ['#705ec8', '#fa057a'],
      chart: { type: 'bar', height: 350 },
      xaxis: { categories: ['T-Bills Fwd', 'PIBs Fwd', 'Sukuk Fwd'] },
      title: { text: 'Forward Deals' },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
    };

    
    this.chartOptionsHFTMTM = {
      pieseries: [
        this.dashboardData?.HFTData.tdyMTMPIBs,
        this.dashboardData?.HFTData.tdyMTMTBills,
        this.dashboardData?.HFTData.tdyMTMSukuk
      ],
      colors: ['#0774f8', '#09ad95',  '#f5334f'],
      chart: {
          type: 'donut',
          height: 280,
      },
      legend: {
          show: false,
          
      },
      responsive: [{
          breakpoint: 380,
          options: {
              chart: {
                  width: 245
              },
              legend: {
                  show: false,
                  position: 'bottom'
              }
          }
      }]  
    };
    this.chartOptionsAFSMTM = {
      pieseries: [
        this.dashboardData?.AFS.tdyMTMPIBs,
        this.dashboardData?.AFS.tdyMTMTBills,
        this.dashboardData?.AFS.tdyMTMSukuk
      ],
      colors: ['#d43f8d', '#09ad95',  '#f5334f'],
      chart: {
          type: 'donut',
          height: 280,
      },
      legend: {
          show: false,
          
      },
      responsive: [{
          breakpoint: 380,
          options: {
              chart: {
                  width: 245
              },
              legend: {
                  show: false,
                  position: 'bottom'
              }
          }
      }]  
    };
    this.chartOptionsGTotalMTM = {
      pieseries: [
        this.dashboardData?.GTotal.tdyMTMPIBs,
        this.dashboardData?.GTotal.tdyMTMTBills,
        this.dashboardData?.GTotal.tdyMTMSukuk
      ],
      colors: ['#0774f8', '#d43f8d', '#09ad95'],
      chart: {
          type: 'donut',
          height: 280,
      },
      legend: {
          show: false,
          
      },
      responsive: [{
          breakpoint: 380,
          options: {
              chart: {
                  width: 245
              },
              legend: {
                  show: false,
                  position: 'bottom'
              }
          }
      }]  
    };
  }
}
