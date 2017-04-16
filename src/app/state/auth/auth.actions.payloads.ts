export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginCompletedPayload {
    email: string;
    result: {};
}

export interface LoginFailedPayload {
    error: {};
}