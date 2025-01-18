import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionComponent } from './auction/auction.component';

const routes: Routes = [
   {
            path:'',
            children:[
              {
                path:'auction',
                component:AuctionComponent
              },
            
            ]
          }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SbpAuctionRoutingModule { }
