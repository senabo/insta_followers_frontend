import React, {FC} from "react";
import {Box, Snackbar} from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import TransitionUp from "../ui/TransitionUp";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import ProgressBar from "../ui/ProgressBar";

const AutoHideDuration = 5000

const CustomMuiAlert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert sx={{'fontWeight': 'bold'}} elevation={10} ref={ref} variant="filled" {...props} />;
});

const Alert: FC = () => {
    const {open, message, severity} = useTypedSelector(store => store.alert)
    const {closeAlert} = useActions()

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        closeAlert()
    };

    return (
        <Snackbar
            TransitionComponent={TransitionUp}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            open={open}
            onClose={handleClose}
        >
            <Box width="480px">
                <CustomMuiAlert onClose={handleClose} severity={severity} square={true} >
                    {message}
                </CustomMuiAlert>
                <ProgressBar time_duration={AutoHideDuration} start_from={100}/>
            </Box>
        </Snackbar>
    )
}

export default Alert
