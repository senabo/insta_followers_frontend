import {Dispatch} from "redux";
import {AlertAction, AlertType} from "../../types/alert";

export const alertError = (message: string) => {
    return (dispatch: Dispatch<AlertAction>) => {
        dispatch({type: AlertType.ERROR, message: message})
    }
}

export const closeAlert = () => {
    return (dispatch: Dispatch<AlertAction>) => {
        dispatch({type: AlertType.CLOSED})
    }
}
