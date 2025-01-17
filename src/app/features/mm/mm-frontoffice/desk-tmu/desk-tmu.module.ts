import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeskTmuRoutingModule } from './desk-tmu-routing.module';
import { RatesInputComponent } from './rates-input/rates-input.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RatesInputComponent
  ],
  imports: [
    CommonModule,
    DeskTmuRoutingModule,
    NgSelectModule,
    SharedModule, 
  ]
})
export class DeskTmuModule { }
