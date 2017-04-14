import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { AppState, AuthState } from '../../abstractions/state';
import { AuthActions } from './auth.actions';
import * as Names from './auth.actions.names'
import * as Payloads from './auth.actions.payloads';

@Injectable()
export class AuthEffects {

    private authState: AuthState;

    constructor(
        private store: Store<AppState>,
        private authActions: AuthActions,
        private actions$: Actions
    )
    {
        this.store.subscribe(s => this.authState = s.auth);
    }

    @Effect() login = this.actions$
        .ofType(Names.LOGIN)
        .map(toPayload)
        .map((payload: Payloads.LoginPayload) =>
            this.authActions.login(payload.email, payload.password));
}