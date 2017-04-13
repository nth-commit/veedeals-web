import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsModule } from '../../features/deals/deals.module';

import { DealRoutingModule } from './deal-routing.module';
import { DealComponent } from './deal.component';

@NgModule({
  imports: [
    CommonModule,
    DealsModule,
    DealRoutingModule
  ],
  declarations: [DealComponent],
  exports: [DealComponent]
})
export class DealModule { }
