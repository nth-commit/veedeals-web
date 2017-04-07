import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { FeaturedDealsComponent } from './components/featured-deals/featured-deals.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [FeaturedDealsComponent]
})
export class DealsModule { }
