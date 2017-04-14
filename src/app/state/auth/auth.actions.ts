import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import * as Names from './auth.actions.names';
import * as Payloads from './auth.actions.payloads';

@Injectable()
export class AuthActions {

  constructor() { }

  login(email: string, password: string): Action {
    return {
      type: Names.LOGIN,
      payload: <Payloads.LoginPayload>{
        email,
        password
      }
    }
  }

  loginStarted(email: string, password: string): Action {
    return {
      type: Names.LOGIN_STARTED,
      payload: <Payloads.LoginStartedPayload>{
        email,
        password
      }
    }
  }
}
