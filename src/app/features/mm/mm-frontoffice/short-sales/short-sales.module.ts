import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortSalesRoutingModule } from './short-sales-routing.module';
import { InputComponent } from './input/input.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputIssueComponent } from './input-issue/input-issue.component';

@NgModule({
  declarations: [InputComponent, InputIssueComponent],
  imports: [
    CommonModule,
    ShortSalesRoutingModule,
    NgSelectModule,
    SharedModule,
  ],
})
export class ShortSalesModule {}
