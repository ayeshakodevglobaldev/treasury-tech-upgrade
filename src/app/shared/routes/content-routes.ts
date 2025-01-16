import { Routes } from '@angular/router';

export const content: Routes = [
    {
        path: 'dashboards',
        loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path:'dashboard',
      loadChildren:()=> import('../../dashboard/dashboard.module').then(m=>m.DashboardModule)
    },
    {
        path: 'apps/contact',
        loadChildren: () => import('../../components/apps/contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: 'apps',
        loadChildren: () => import('../../components/apps/apps.module').then(m => m.AppsModule)
    },
    {
        path:'features/fx/fx-frontoffice/outright-deal',
        loadChildren:()=>import('../../features/fx/fx-frontoffice/outright-deal/outright-deal.module').then(m=>m.OutrightDealModule)
    },
    {
        path:'features/fx/fx-frontoffice/swap-deal',
        loadChildren:()=>import('../../features/fx/fx-frontoffice/swap-deal/swap-deal.module').then(m=>m.SwapDealModule)
    },
    {
        path:'features/fx/fx-frontoffice/placement-deal',
        loadChildren:()=>import('../../features/fx/fx-frontoffice/placement-deal/placement-deal.module').then(m=>m.PlacementDealModule)
    },
    {
        path:'features/mm/mm-frontoffice/outright',
        loadChildren:()=>import('../../features/mm/mm-frontoffice/outright/outright.module').then(m=>m.OutrightModule)
    },
    {
        path:'features/mm/mm-frontoffice/call',
        loadChildren:()=>import('../../features/mm/mm-frontoffice/call/call.module').then(m=>m.CallModule)
    },
    {
        path:'features/mm/mm-frontoffice/short-sales',
        loadChildren:()=>import('../../features/mm/mm-frontoffice/short-sales/short-sales.module').then(m=>m.ShortSalesModule)
    },

]
