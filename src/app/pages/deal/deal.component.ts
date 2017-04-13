import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { DealResult } from '../../../_lib/veedeals-api';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {

  private deal$: Observable<DealResult>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.deal$ = this.route.data.flatMap(data => data['deal']);
  }

  purchase() {
    alert('test')
  }

}
