import {axios} from "./index";

const SIGN_IN_URL = 'api/auth/signup/social/'
const SOCIAL_PROVIDER = 'instagram'

export const authAPI = {
    signIn(access_token: string) {
        return axios.post(
            SIGN_IN_URL,
            {'access_token': access_token, 'provider': SOCIAL_PROVIDER}
        ).then(res => res.data)
    }
}
