import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HOME_ROUTE_NAME } from './pages/home/home.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: HOME_ROUTE_NAME,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
