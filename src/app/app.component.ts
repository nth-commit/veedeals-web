import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
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
    private store: Store<AppState>,
    private mdDialog: MdDialog 
  ) { }

  ngOnInit() {
    this.auth$ = this.store.select(a => a.auth);
  }

  login() {
    let ref = this.mdDialog.open(LoginDialogComponent);
    ref.afterClosed().subscribe(action => {
      if (action) {
        this.store.dispatch(action);
      }
    });
  }
}

@Component({
  template: `
    <app-modal title="Login to Veedeals">
      <app-login (onLogin)="dialogRef.close($event)"></app-login>
    </app-modal>`
})
export class LoginDialogComponent {
  constructor(
    private dialogRef: MdDialogRef<LoginDialogComponent>
  ) { }
}
