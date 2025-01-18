import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallRoutingModule } from './call-routing.module';
import { InputComponent } from './input/input.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    CallRoutingModule,
    NgSelectModule,
    SharedModule,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CallModule { }
