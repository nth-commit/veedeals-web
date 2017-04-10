import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';

import { CoreModule } from '../core/core.module';
import { DealCardListComponent } from './components/deal-card-list/deal-card-list.component';
import { DealCardComponent } from './components/deal-card/deal-card.component';

import { DealResolve } from './resolves/deal.resolve';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    CoreModule
  ],
  declarations: [DealCardListComponent, DealCardComponent],
  exports: [DealCardListComponent],
  providers: [
    DealResolve
  ]
})
export class DealsModule { }
