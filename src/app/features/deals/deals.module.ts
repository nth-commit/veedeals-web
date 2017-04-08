import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { DealCardListComponent } from './components/deal-card-list/deal-card-list.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [DealCardListComponent],
  exports: [
    DealCardListComponent
  ]
})
export class DealsModule { }
