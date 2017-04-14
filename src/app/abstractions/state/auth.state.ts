export interface AuthState {
    loading: boolean;
    email: string;
}

export const DEFAULT_AUTH_STATE: AuthState = {
    loading: false,
    email: null
}