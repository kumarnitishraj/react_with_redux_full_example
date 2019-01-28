import { 
    GUEST_LIST_SUCESSS
 } from '../../../config/Constants';




export default (state = {}, action) => {
    
    switch (action.type) {
        
        case GUEST_LIST_SUCESSS:
            return{
                ...state,
                guestList       : action.data
            }

        default:
            return state
    }
}