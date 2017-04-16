import { ActionReducer, Action } from '@ngrx/store';
import { AuthState, DEFAULT_AUTH_STATE } from '../../abstractions/state';
import * as Names from './auth.actions.names';
import * as Payloads from './auth.actions.payloads';

export const authReducer: ActionReducer<AuthState> = (state: AuthState = DEFAULT_AUTH_STATE, { type, payload }: Action) => {
  switch (type) {

    case Names.LOGIN: {
      return Object.assign({}, state, <AuthState>{
        loading: true
      });
    }

    case Names.LOGIN_COMPLETED: {
      let { email } = <Payloads.LoginCompletedPayload>payload;
      return Object.assign({}, state, <AuthState>{
        loading: false,
        email
      });
    }

    case Names.LOGIN_FAILED: {
      return Object.assign({}, state, <AuthState>{
        loading: false
      });
    }

    default:
      return state;
  }
};