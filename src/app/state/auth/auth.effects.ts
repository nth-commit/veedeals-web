import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { AppState, AuthState } from '../../abstractions/state';
import { AuthActions } from './auth.actions';
import * as Names from './auth.actions.names'
import * as Payloads from './auth.actions.payloads';

import { LoginService } from '../../features/auth/services/login.service';
import { ErrorActions } from '../error';

@Injectable()
export class AuthEffects {

    private authState: AuthState;

    constructor(
        private store: Store<AppState>,
        private authActions: AuthActions,
        private errorActions: ErrorActions, 
        private loginService: LoginService,
        private actions$: Actions
    )
    {
        this.store.subscribe(s => this.authState = s.auth);
    }

    @Effect() login: Observable<Action> = this.actions$
        .ofType(Names.LOGIN)
        .map(toPayload)
        .switchMap((p: Payloads.LoginPayload) => Observable.fromPromise(
            this.loginService
                .login(p.email, p.password)
                .then(r => this.authActions.loginCompleted(p.email, r))
                .catch(e => this.authActions.loginFailed(e))));

    @Effect() loginFailed: Observable<Action> = this.actions$
        .ofType(Names.LOGIN_FAILED)
        .map((p: Payloads.LoginFailedPayload) => this.errorActions.newError(p.error))
}