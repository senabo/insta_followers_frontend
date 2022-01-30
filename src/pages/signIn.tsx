import React, {FC, useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import CenterBox from "../ui/CenterBox";
import {Typography} from "@mui/material";
import InstagramLoginButton from "../components/InstagramLogin";
import {useActions} from "../hooks/useActions";

const SignInPage: FC = () => {
    const {error} = useTypedSelector(store => store.auth)
    const {alertError} = useActions()

    useEffect(() => {
        if (error){
            alertError(error)
        }
    }, [error]);

    return (
        <div>
            <CenterBox minHeight="50vh">
                <Typography
                    fontFamily={"Bebas Neue"}
                    letterSpacing={"8px"}
                    variant={"h3"}
                >
                    Instagram Followers Balance
                </Typography>
            </CenterBox>
            <CenterBox>
                <InstagramLoginButton />
            </CenterBox>
        </div>
    )
}

export default SignInPage
