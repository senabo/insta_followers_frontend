import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {alertReducer} from "./alertReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer
})

export type RootState = ReturnType<typeof rootReducer>