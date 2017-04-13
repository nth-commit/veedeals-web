import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdCardModule } from '@angular/material';

import { CoreModule } from '../core/core.module';
import { DealCardListComponent } from './components/deal-card-list/deal-card-list.component';
import { DealCardComponent } from './components/deal-card/deal-card.component';

import { DealResolve } from './resolves/deal.resolve';
import { DealViewComponent } from './components/deal-view/deal-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdCardModule,
    CoreModule
  ],
  declarations: [DealCardListComponent, DealCardComponent, DealViewComponent],
  exports: [DealCardListComponent, DealViewComponent],
  providers: [
    DealResolve
  ]
})
export class DealsModule { }
