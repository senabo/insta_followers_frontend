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
    SIGN_IN = 'SIGN_IN',
    SIGN_IN_ERROR = 'SIGN_IN_ERROR'
}

interface SignInAction {
    type: AuthActionTypes.SIGN_IN;
    payload: SignInPost;
}

interface SignInErrorAction {
    type: AuthActionTypes.SIGN_IN_ERROR;
    error: string;
}

export type AuthAction = SignInAction | SignInErrorAction
