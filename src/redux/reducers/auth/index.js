import { 
    AUTH_ERROR,
    NETWORK_SUCCESS,
    CLEAR_NETWORK_DATA,
    START_NETWORK_CALL,
    LOGIN_SUCESS,
    REGISTER_SUCESS,
    LOGIN_ERROR

 } from '../../../config/Constants';


const initialState = {loadingStatus:false}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case LOGIN_SUCESS:
            return{
                ...state,
                data            : action.data,
                token           : action.token,
                loadingStatus   : false,
            }
        
        case REGISTER_SUCESS:
            return{
                ...state,
                data            : action.data,
                token           : action.token,
                loadingStatus   : false,
            }

        case CLEAR_NETWORK_DATA:
            return {
                ...state,
                loadingStatus   :false
            }
        
        case START_NETWORK_CALL:
            return {
                ...state,
                loadingStatus   : true,
            }
        
        case AUTH_ERROR:
            return {
                ...initialState,
                message         : action.message,
                registerError   : true
            }


        case LOGIN_ERROR:
            return {
                ...state,
                loadingStatus   : false,
                message         : action.message,
                loginError      : true
            }

        default:
            return state
    }
}