import {AuthAction, AuthActionTypes, AuthState} from "../../types/auth";

const initialState: AuthState = {
    auth_token: null,
    user: {username: ""},
    loading: false,
    error: null
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SIGN_IN:
            return {
                ...initialState,
                auth_token: action.payload.auth_token,
                user: action.payload.user
            }
        default:
            return state
    }
}
