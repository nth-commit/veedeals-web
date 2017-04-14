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

  loginCompleted(result: any): Action {
    return {
      type: Names.LOGIN_COMPLETED,
      payload: <Payloads.LoginCompletedPayload>{
        result
      }
    }
  }

  loginFailed(error: any): Action {
    return {
      type: Names.LOGIN_FAILED,
      payload: <Payloads.LoginFailedPayload>{
        error
      }
    }
  }
}
