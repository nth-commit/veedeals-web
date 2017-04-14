export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginStartedPayload {
    email: string;
    password: string;
}

export interface LoginCompletedPayload {
    result: {};
}