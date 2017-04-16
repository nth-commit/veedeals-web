import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import * as Names from './error.actions.names';
import * as Payloads from './error.actions.payloads';

@Injectable()
export class ErrorActions {

  constructor() { }

  newError(error: any): Action {
    return {
      type: Names.NEW_ERROR,
      payload: <Payloads.NewErrorPayload>{
        error
      }
    }
  }
}
