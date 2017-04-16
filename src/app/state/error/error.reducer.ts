import { ActionReducer, Action } from '@ngrx/store';
import { ErrorState, ErrorStateItem, DEFAULT_ERROR_STATE } from '../../abstractions/state';
import * as Names from './error.actions.names';
import * as Payloads from './error.actions.payloads';

export const errorReducer: ActionReducer<ErrorState> = (state: ErrorState = DEFAULT_ERROR_STATE, { type, payload }: Action) => {

  switch (type) {

    case Names.NEW_ERROR: {
      let id = 0;
      let previousError = state.currentError;
      if (previousError) {
        id++;
      }

      let { error } = <Payloads.NewErrorPayload>payload;
      let currentError: ErrorStateItem = {
        id,
        error
      }

      return Object.assign({}, state, <ErrorState>{
        currentError,
        errors: [currentError, ...state.errors]
      });
    }

    default:
      return state;
  }
};