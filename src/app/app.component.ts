import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';

import { AppState, AuthState } from './abstractions/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private auth$: Observable<AuthState>;

  constructor(
    private store: Store<AppState> 
  ) { }

  ngOnInit() {
    this.auth$ = this.store.select(a => a.auth);
  }
}
