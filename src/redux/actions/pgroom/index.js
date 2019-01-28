import { getPgLists, register } from '../../network';
import {
    START_NETWORK_CALL,
    NETWORK_ERROR,
    LOGIN_SUCESS,
    PG_LIST_SUCESS
} from '../../../config/Constants';

// get Pg List Action
export const getPgs = (params) => {

    return dispatch => {
        dispatch({type:START_NETWORK_CALL})
        getPgLists(params)
            .then((response) => {
            
                dispatch({
                    type : PG_LIST_SUCESS,
                    data : response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: NETWORK_ERROR,
                    error: error.data,
                })
            })
    }
}

