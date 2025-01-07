import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallRoutingModule } from './call-routing.module';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    CallRoutingModule
  ]
})
export class CallModule { }
