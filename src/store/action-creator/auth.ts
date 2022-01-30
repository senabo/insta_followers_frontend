import {AuthAction, AuthActionTypes, SignInPost} from "../../types/auth";
import {authAPI} from "../../api/auth";
import {Dispatch} from "redux";


export const signIn = (access_token: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            const res: SignInPost = await authAPI.signIn(access_token)
            localStorage.setItem("auth_token", res.auth_token)
            localStorage.setItem("username", res.user.username)
            dispatch({type: AuthActionTypes.SIGN_IN, payload: res})
        } catch (e) {
            console.log('error sign in')
        }
    }
}
