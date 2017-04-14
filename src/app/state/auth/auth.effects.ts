import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { LoginService } from '../../features/auth/services/login.service';

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
        private loginService: LoginService,
        private actions$: Actions
    )
    {
        this.store.subscribe(s => this.authState = s.auth);
    }

    @Effect() login: Observable<Action> = this.actions$
        .ofType(Names.LOGIN)
        .map(toPayload)
        .switchMap((p: Payloads.LoginPayload) => this.loginService
            .login(p.email, p.password)
            .map(r => this.authActions.loginCompleted(r))
            .catch(e => Observable.of(this.authActions.loginFailed(e))));
}