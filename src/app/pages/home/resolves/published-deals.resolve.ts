import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DealsClient, DealResult } from '../../../../_lib/veedeals-api';

@Injectable()
export class PublishedDealsResolve implements Resolve<DealResult[]> {

  constructor(
      private dealsClient: DealsClient
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<DealResult[]> {
    return this.dealsClient.listPublished(undefined, undefined).toPromise();
  }
}