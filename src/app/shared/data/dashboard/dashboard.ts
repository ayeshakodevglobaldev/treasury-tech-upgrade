/**
* Row 2 Data
*/
export class RecentActivity {
    title?: string;
    date?: string;
    text?: string;
    name?: string;
    work?: string;
}

export const recentActivitiesData: RecentActivity[] = [
    {
        title: 'Task Finished', date: '09 June 2020', text: 'finished task on', name: 'Joseph Ellison', work: 'Project Management'
    },
    {
        title: 'New Comment', date: '05 June 2020', text: 'Product delivered', name: 'Elizabeth Scott', work: 'Service Management'
    },
    {
        title: 'Target Completed', date: '01 June 2020', text: 'finished target on', name: 'Sonia Peters', work: 'this month Sales'
    },
    {
        title: 'Revenue Sources', date: '26 May 2020', text: 'source report on', name: 'Justin Nash', work: 'Generated'
    },
    {
        title: 'Dispatched Order', date: '22 May 2020', text: 'ontime order delivery', name: 'Ella Lambert', work: 'Service Management'
    },
    {
        title: 'New User Added', date: '19 May 2020', text: 'visit the site', name: 'Nicola Blake', work: 'Membership allocated'
    },
    {
        title: 'Revenue Sources', date: '15 May 2020', text: 'source report on', name: 'Richard Mills', work: 'Generated'
    },
    {
        title: 'New Order Placed', date: '11 May 2020', text: 'is proces the order', name: 'Steven Hart', work: '#987'
    }
]

/**
* Row 3 Data
*/
export class RecentCustomers {
    img?: string;
    name?: string;
    userid?: number;
    status?: string;
    payment?: number;
}

export const recentCustomersData: RecentCustomers[] = [
    {
        img: './assets/images/users/1.jpg', name: 'Lisa Marshall', userid: 2342, status: 'Paid', payment: 558
    },
    {
        img: './assets/images/users/2.jpg', name: 'John Chapman', userid: 6720, status: 'Pending', payment: 458
    },
    {
        img: './assets/images/users/3.jpg', name: 'Sonia Smith', userid: 8763, status: 'Paid', payment: 358
    },
    {
        img: './assets/images/users/4.jpg', name: 'Joseph Abraham', userid: 1076, status: 'Pending', payment: 796
    },
    {
        img: './assets/images/users/5.jpg', name: 'Joseph Abraham', userid: 986, status: 'Paid', payment: 867
    },
]

/**
* MM dashboard Data
*/

export class HFTData {
    tdyFaceValueTBills?: number;
    tdyFaceValuePIBs?: number;
    tdyFaceValueSukuk?: number;
    tdyFaceValueTotal?: number;
    tdyMTMTBills?: number;
    tdyMTMPIBs?: number;
    tdyMTMSukuk?: number;
    tdyMTMTotal?: number;
}
export class AFS{
    tdyFaceValueTBills?: number;
    tdyFaceValuePIBs?: number;
    tdyFaceValueSukuk?: number;
    tdyFaceValueTotal?: number;
    tdyMTMTBills?: number;
    tdyMTMPIBs?: number;
    tdyMTMSukuk?: number;
    tdyMTMTotal?: number;
}

export class GTotal{
    tdyFaceValueTBills?: number;
    tdyFaceValuePIBs?: number;
    tdyFaceValueSukuk?: number;
    tdyFaceValueTotal?: number;
    tdyMTMTBills?: number;
    tdyMTMPIBs?: number;
    tdyMTMSukuk?: number;
    tdyMTMTotal?: number;
}
export class rdyTdyDeals{
    tbillsPurchase?: number;
    pibsPurchase?: number;
    sukukPurchase?: number;
    tbillsPurchaseAvgRate?: number;
    pibsPurchaseAvgRate?: number;
    sukukPurchaseAvgRate?: number;
    tbillsSale?: number;
    pibsSale?: number;
    sukukSale?: number;
    tbillsSaleAvgRate?: number;
    pibsSaleAvgRate?: number;
    sukukSaleAvgRate?: number;
}
export class fwdForwardDeals{
    tbillsPurchase?: number;
    pibsPurchase?: number;
    sukukPurchase?: number;
    tbillsPurchaseAvgRate?: number;
    pibsPurchaseAvgRate?: number;
    sukukPurchaseAvgRate?: number;
    tbillsSale?: number;
    pibsSale?: number;
    sukukSale?: number;
    tbillsSaleAvgRate?: number;
    pibsSaleAvgRate?: number;
    sukukSaleAvgRate?: number;
}

export class MMDashboard {
    title?: string;
    // value?: number;
    color?: string;
    // desc?: string;
    dilAmount?: number;
    weekendDate?: string;
    crr?: number;
    difference?: number;
    avgLongShort?: number;
    //create array of objects
    HFTData?: HFTData;   
    AFS?: AFS;
    GTotal?: GTotal;
    rdyTdyDeals?: rdyTdyDeals;
    fwdForwardDeals?: fwdForwardDeals;

}
export const MMDashboardData: MMDashboard={
    title: 'MM Dashboard',
    dilAmount: 1000000,
    weekendDate: '2020-06-30',
    crr: 13,
    difference: 0,
    avgLongShort: 0,
    //add dummy data
    HFTData: {
        tdyFaceValueTBills: 100000,
        tdyFaceValuePIBs: 200000,
        tdyFaceValueSukuk: 300000,
        tdyFaceValueTotal: 600000,
        tdyMTMTBills: 100000,
        tdyMTMPIBs: 200000,
        tdyMTMSukuk: 300000,
        tdyMTMTotal: 600000
    },
    AFS: {
        tdyFaceValueTBills: 100000,
        tdyFaceValuePIBs: 200000,
        tdyFaceValueSukuk: 300000,
        tdyFaceValueTotal: 600000,
        tdyMTMTBills: 100000,
        tdyMTMPIBs: 200000,
        tdyMTMSukuk: 300000,
        tdyMTMTotal: 600000
    },
    GTotal: {
        tdyFaceValueTBills: 100000,
        tdyFaceValuePIBs: 200000,
        tdyFaceValueSukuk: 300000,
        tdyFaceValueTotal: 600000,
        tdyMTMTBills: 100000,
        tdyMTMPIBs: 200000,
        tdyMTMSukuk: 300000,
        tdyMTMTotal: 600000
    },
    rdyTdyDeals: {
        tbillsPurchase: 100000,
        pibsPurchase: 200000,
        sukukPurchase: 300000,
        tbillsPurchaseAvgRate: 100000,
        pibsPurchaseAvgRate: 200000,
        sukukPurchaseAvgRate: 300000,
        tbillsSale: 100000,
        pibsSale: 200000,
        sukukSale: 300000,
        tbillsSaleAvgRate: 100000,
        pibsSaleAvgRate: 200000,
        sukukSaleAvgRate: 300000
    },
    fwdForwardDeals: {
        tbillsPurchase: 100000,
        pibsPurchase: 200000,
        sukukPurchase: 300000,
        tbillsPurchaseAvgRate: 100000,
        pibsPurchaseAvgRate: 200000,
        sukukPurchaseAvgRate: 300000,
        tbillsSale: 100000,
        pibsSale: 200000,
        sukukSale: 300000,
        tbillsSaleAvgRate: 100000,
        pibsSaleAvgRate: 200000,
        sukukSaleAvgRate: 300000
    }
}

