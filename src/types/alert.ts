export enum AlertType {
    ERROR = 'error',
    SUCCESS = 'success',
    WARNING = 'warning',
    INFO = 'info',
    CLOSED = 'closed'
}

export interface AlertState{
    message: string | null;
    type: AlertType;
    open: boolean;
    severity: AlertType.INFO | AlertType.WARNING | AlertType.SUCCESS | AlertType.ERROR
}

interface ErrorAlertAction {
    type: AlertType.ERROR,
    message: AlertState['message'],
}

interface SuccessAlertAction {
    type: AlertType.SUCCESS,
    message: AlertState['message'],
}

interface CloseAlertAction {
    type: AlertType.CLOSED
}

export type AlertAction = ErrorAlertAction
    | SuccessAlertAction
    | CloseAlertAction
