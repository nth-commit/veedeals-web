import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { DealResult } from '../../../_lib/veedeals-api';

import { DealHrefResolver } from '../../features/deals/components/deal-card-list/deal-card-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private deals$: Observable<DealResult[]>;

  private dealHrefResolver: DealHrefResolver;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.deals$ = this.route.data.flatMap(data => data['publishedDeals']);

    this.dealHrefResolver = {
      resolve: (deal: DealResult) => `london/deals/${deal.id}`
    }
  }
}
