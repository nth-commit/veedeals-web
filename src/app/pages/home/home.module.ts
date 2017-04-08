import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../features/core/core.module';
import { DealsModule } from '../../features/deals/deals.module';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

import { PublishedDealsResolve } from './resolves/published-deals.resolve';

@NgModule({
  imports: [
    CommonModule,

    CoreModule,
    DealsModule,
    
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [
    PublishedDealsResolve
  ]
})
export class HomeModule { }
