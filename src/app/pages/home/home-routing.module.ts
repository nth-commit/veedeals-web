import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HOME_ROUTE_NAME } from './home.constants';

import { HomeComponent } from './home.component';

import { PublishedDealsResolve } from './resolves/published-deals.resolve';

const routes: Routes = [
  {
      path: HOME_ROUTE_NAME,
      component: HomeComponent,
      resolve: {
        publishedDeals: PublishedDealsResolve
      }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
