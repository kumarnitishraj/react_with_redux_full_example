import { getGuestReletedPg } from '../../network';
import {
    START_NETWORK_CALL,
    NETWORK_ERROR,
    GUEST_LIST_SUCESSS,
} from '../../../config/Constants';

// get Guest List Action
export const getGuest = (params) => {

    return dispatch => {
        
        getGuestReletedPg(params)
            .then((response) => {
            
                dispatch({
                    type : GUEST_LIST_SUCESSS,
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

