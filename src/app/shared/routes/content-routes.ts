import { Routes } from '@angular/router';

export const content: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'dashboard-view',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
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
        path:'features/fx/fx-frontoffice/transfer-deal',
        loadChildren:()=>import('../../features/fx/fx-frontoffice/transfer-deal/transfer-deal.module').then(m=>m.TransferDealModule)
    }
]