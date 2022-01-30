import React, {FC, useEffect, useState} from "react";
import {LinearProgress} from "@mui/material";
import {useActions} from "../hooks/useActions";

interface ProgressBarProps{
    start_from: number,
    time_duration: number,
}

const ProgressBar: FC<ProgressBarProps> = ({start_from, time_duration}) =>{
    const STEP = 5

    const time_interval = (time_duration) / 100 * STEP

    const [progress, setProgress] = useState(start_from)
    const {closeAlert} = useActions()


    useEffect(() => {
          const timer = setInterval(() => {
            setProgress((newProgress) => (
                newProgress <= 0 ? 0 : newProgress - STEP
            ));
        }, time_interval)

        setTimeout(() => {clearInterval(timer); closeAlert();}, time_duration + 500)

    }, []);

    return <LinearProgress color="error" variant="determinate" value={progress}/>
}

export default ProgressBar
