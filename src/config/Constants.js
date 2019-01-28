
// API URL
const BASE_URL = 'https://pure-depths-19690.herokuapp.com'
export const SERVER_BASE_API = {
    URL                 : `${BASE_URL}/api/v1/`,
} 

/* ---------------- URL List -------- */
export const APP_URL = {
    PGROOM              : 'pg',
    LOGIN               : 'login',
    REGISTER            : 'register',
    GUEST               : 'guest',
    PGDETAIL            : 'pg-detail',
    GUEST_PG            : 'pg-guest',
}


/* ---------------- Auth  Reducer ActionType -------- */

export const AUTH_ERROR                 = '@axios-action-AUTH_ERROR';
export const LOGIN_ERROR                = '@axios-action-LOGIN_ERROR';
export const NETWORK_ERROR              = '@axios-action-NETWORK_ERROR';
export const NETWORK_SUCCESS            = '@axios-action-NETWORK_SUCCESS';
export const CLEAR_NETWORK_DATA         = '@axios-action-CLEAR_NETWORK_DATA';
export const START_NETWORK_CALL         = '@axios-action-START_NETWORK_CALL';
export const ERROR_MESSAGE              = '@component-action-ERROR_MESSAGE';
export const CLEAR_DATA                 = '@axios-action-CLEAR_DATA';
export const LOGIN_SUCESS               = '@axios-action-LOGIN_SUCESS';
export const REGISTER_SUCESS            = '@axios-action-REGISTER_SUCESS';
export const PGDETAILS_SUCESS           = '@axios-action-PGDETAILS_SUCESS';
export const PG_LIST_SUCESS             = '@axios-action-PG_LIST_SUCESS';
export const PG_GUEST_DETAILS_SUCESS    = '@axios-action-PG_GUEST_DETAILS_SUCESS';
export const GUEST_LIST_SUCESSS         = '@axios-action-GUEST_LIST_SUCESSS';



