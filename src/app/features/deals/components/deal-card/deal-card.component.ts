import { Component, OnInit, Input } from '@angular/core';
import { DealResult } from '../../../../../_lib/veedeals-api';

@Component({
  selector: 'app-deal-card',
  templateUrl: './deal-card.component.html',
  styleUrls: ['./deal-card.component.scss']
})
export class DealCardComponent implements OnInit {
  @Input() deal: DealResult;

  dealImage: string = 'http://placehold.it/1000x1000';

  constructor() { }

  ngOnInit() {
  }
}
