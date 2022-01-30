import * as AuthActionCreators from './auth'
import * as AlertActionCreators from './alert'

export default  {
    ...AuthActionCreators,
    ...AlertActionCreators
}