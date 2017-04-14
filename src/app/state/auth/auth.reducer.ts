import { ActionReducer, Action } from '@ngrx/store';
import { AuthState, DEFAULT_AUTH_STATE } from '../../abstractions/state';

export const authReducer: ActionReducer<AuthState> = (state: AuthState = DEFAULT_AUTH_STATE, { type, payload }: Action) => {
    switch (type) {

        default:
            return state;
    }
};