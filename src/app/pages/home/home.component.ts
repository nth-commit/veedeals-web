import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { DealResult } from '../../../_lib/veedeals-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private deals$: Observable<DealResult[]>;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
        this.deals$ = this.route.data.map(data => data['publishedDeals']);
    }

}
