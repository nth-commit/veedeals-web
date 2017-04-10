import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  locations$: Observable<string[]>;
  selectedLocation$: Observable<string>;

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.locations$ = this.locationService.listLocations();
    this.selectedLocation$ = this.locations$.map(a => a[0]);
  }

}
