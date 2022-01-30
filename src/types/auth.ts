export interface UserInterface{
    username: string;
}

export interface SignInPost {
    auth_token: string;
    user: UserInterface;
}

export interface AuthState {
    auth_token: null | string;
    user: UserInterface;
    loading: boolean;
    error: null | string;
}

export enum AuthActionTypes {
    SIGN_IN = 'SIGN_IN'
}

interface SignUpAction {
    type: AuthActionTypes.SIGN_IN;
    payload: SignInPost;
}

export type AuthAction = SignUpAction
