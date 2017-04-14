import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DealResult } from '../../../../../_lib/veedeals-api';

@Component({
  selector: 'app-deal-view',
  templateUrl: './deal-view.component.html',
  styleUrls: ['./deal-view.component.scss']
})
export class DealViewComponent implements OnInit {
  @Output() onPurchaseClick = new EventEmitter<void>();
  @Input() deal: DealResult;

  constructor() { }

  ngOnInit() {
  }

}
