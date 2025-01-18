import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallRoutingModule } from './call-routing.module';
import { InputComponent } from './input/input.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    CallRoutingModule,
    NgSelectModule,
  ]
})
export class CallModule { }
