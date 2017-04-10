import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { PublishedDealsResolve } from './resolves/published-deals.resolve';

const routes: Routes = [
  {
      path: ':area',
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
