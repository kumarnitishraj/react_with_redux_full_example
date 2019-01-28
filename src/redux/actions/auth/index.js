import { login, register } from '../../network';
import {
    START_NETWORK_CALL,
    NETWORK_ERROR,
    LOGIN_SUCESS,
    REGISTER_SUCESS,
    AUTH_ERROR,
    LOGIN_ERROR
} from '../../../config/Constants';

//  Login Action
export const loginUser = (params) => {

    return dispatch => {
        dispatch({type:START_NETWORK_CALL})
        login(params)
            .then((response) => {
                console.log(response)
                localStorage.setItem("token", response.token);
                localStorage.setItem("auth", JSON.stringify(response.data))
                dispatch({
                    type : LOGIN_SUCESS,
                    data : response.data,
                    token: response.token
                })
            })
            .catch((error) => {
                dispatch({
                    type: LOGIN_ERROR,
                    message: "Email and password is incorrect !",
                })
            })
    }
}

// Register Action 
export const registerUser = (params) => {

    return dispatch => {
        dispatch({type:START_NETWORK_CALL})

        register(params)
            .then((response) => {
                localStorage.setItem("token", response.token);
                localStorage.setItem("auth", response.data)
                dispatch({
                    type : REGISTER_SUCESS,
                    data : response.data,
                    token: response.token
                })
            })
            .catch((error) => {
                dispatch({
                    type: AUTH_ERROR,
                    message: 'Email already exist please try diffrent !',
                })
            })
    }
}

