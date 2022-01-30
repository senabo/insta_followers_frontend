import {AlertAction, AlertState, AlertType} from "../../types/alert";

const initialState: AlertState = {
    message: null,
    type: AlertType.SUCCESS,
    open: false,
    severity: AlertType.SUCCESS
}

export const alertReducer = (
    state=initialState,
    action: AlertAction
): AlertState => {
    switch (action.type) {
        case AlertType.SUCCESS:
            return {
                type: AlertType.SUCCESS,
                message: action.message,
                open: true,
                severity: AlertType.SUCCESS
            }
        case AlertType.ERROR:
            return {
                type: AlertType.ERROR,
                message: action.message,
                open: true,
                severity: AlertType.ERROR
            }
        case AlertType.CLOSED:
            return {
                ...state,
                open: false
            }
        default:
            return state
    }
}