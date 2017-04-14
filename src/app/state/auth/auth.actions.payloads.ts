export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginCompletedPayload {
    result: {};
}

export interface LoginFailedPayload {
    error: {};
}