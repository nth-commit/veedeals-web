import { Component, OnInit, Input } from '@angular/core';
import { DealResult } from '../../../../../_lib/veedeals-api';

export interface DealRouteResolver {
  resolve(deal: DealResult): string;
}

@Component({
  selector: 'app-deal-card-list',
  templateUrl: './deal-card-list.component.html',
  styleUrls: ['./deal-card-list.component.scss']
})
export class DealCardListComponent implements OnInit {
  @Input() deals: DealResult[];
  @Input() dealRouteResolver: DealRouteResolver;

  constructor() { }

  ngOnInit() {
  }

}
