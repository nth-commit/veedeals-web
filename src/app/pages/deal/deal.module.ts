import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealRoutingModule } from './deal-routing.module';

import { DealComponent } from './deal.component';

@NgModule({
  imports: [
    CommonModule,
    DealRoutingModule
  ],
  declarations: [DealComponent],
  exports: [DealComponent]
})
export class DealModule { }
