import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SbpAuctionRoutingModule } from './sbp-auction-routing.module';
import { AuctionComponent } from './auction/auction.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AuctionComponent
  ],
  imports: [
    CommonModule,
    SbpAuctionRoutingModule,
    NgSelectModule,
    SharedModule
  ]
})
export class SbpAuctionModule { }
