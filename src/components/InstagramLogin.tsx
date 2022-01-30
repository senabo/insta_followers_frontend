
import InstagramLogin from "@senabo/react-instagram-oauth";
import React, {FC} from "react";
import {useActions} from "../hooks/useActions";


const InstagramLoginButton: FC  = () => {
    const {signIn} = useActions()

    const responseInstagram = async (err: any, response: any) => {
        signIn(response.access_token)
    }

    return(
        <InstagramLogin
            authCallback={responseInstagram}
            appId={process.env.REACT_APP_INSTAGRAM_CLIENT_ID!}
            appSecret={process.env.REACT_APP_INSTAGRAM_CLIENT_SECRET!}
            redirectUri={process.env.REACT_INSTAGRAM_REDIRECT!}
            className='instagram-login-button'
        />
    )
}

export default InstagramLoginButton
