import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DealsClient, DealResult } from '../../../../_lib/veedeals-api';

@Injectable()
export class DealResolve implements Resolve<DealResult> {

  constructor(
      private dealsClient: DealsClient
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<DealResult> {
    let dealId = route.params['dealId'];
    return this.dealsClient.get(dealId).toPromise();
  }
}