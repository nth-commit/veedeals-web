import { RouterState } from '@ngrx/router-store';
import { AuthState } from './auth.state'

export interface AppState {
    router: RouterState,
    auth: AuthState
}