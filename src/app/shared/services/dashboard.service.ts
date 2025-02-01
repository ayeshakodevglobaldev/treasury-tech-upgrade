import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface MMDashboard {
  title: string;
  dilAmount: number;
  weekendDate: string;
  crr: number;
  difference: number;
  avgLongShort: number;
  HFTData: any;
  AFS: any;
  GTotal: any;
  rdyTdyDeals: any;
  fwdForwardDeals: any;
}
@Injectable({providedIn: 'root'})
export class DashboardService {
  private dashboardData: MMDashboard = {
    title: 'MM Dashboard',
    dilAmount: 1000000,
    weekendDate: '2020-06-30',
    crr: 13,
    difference: 0,
    avgLongShort: 0,
    HFTData: { tdyFaceValueTBills: 650000, tdyFaceValuePIBs: 760000, tdyFaceValueSukuk: 450000, tdyFaceValueTotal: 600000, tdyMTMTBills: 100000, tdyMTMPIBs: 200000, tdyMTMSukuk: 300000, tdyMTMTotal: 600000 },
    AFS: { tdyFaceValueTBills: 167000, tdyFaceValuePIBs: 206500, tdyFaceValueSukuk: 345000, tdyFaceValueTotal: 600000, tdyMTMTBills: 100000, tdyMTMPIBs: 200000, tdyMTMSukuk: 300000, tdyMTMTotal: 600000 },
    GTotal: { tdyFaceValueTBills: 100000, tdyFaceValuePIBs: 200000, tdyFaceValueSukuk: 300000, tdyFaceValueTotal: 600000, tdyMTMTBills: 100000, tdyMTMPIBs: 200000, tdyMTMSukuk: 300000, tdyMTMTotal: 600000 },
    rdyTdyDeals: { tbillsPurchase: 100000, pibsPurchase: 200000, sukukPurchase: 300000, tbillsSale: 100000, pibsSale: 200000, sukukSale: 300000 },
    fwdForwardDeals: { tbillsPurchase: 100000, pibsPurchase: 200000, sukukPurchase: 300000, tbillsSale: 100000, pibsSale: 200000, sukukSale: 300000 },
  };
  constructor() { }
  getDashboardData(): Observable<MMDashboard> {
    return of(this.dashboardData);
  }
}
