import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealResolve } from '../../features/deals/resolves/deal.resolve';

import { DealComponent } from './deal.component';

const routes: Routes = [
  {
    path: ':area/deals/:dealId',
    component: DealComponent,
    resolve: {
      deal: DealResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealRoutingModule { }
