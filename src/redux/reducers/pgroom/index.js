import { 
    PG_LIST_SUCESS
 } from '../../../config/Constants';


export default (state = {}, action) => {
    
    switch (action.type) {

        case PG_LIST_SUCESS:
            return{
                ...state,
                pgLists         : action.data,
                loadingStatus   : false,
            }

        default:
            return state;

    }
}