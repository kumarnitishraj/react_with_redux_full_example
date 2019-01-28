import { combineReducers } from 'redux'
import auth from './auth';
import pg from './pgroom';
import guest from './guest';


export default combineReducers({
    auth,
    guest,
    pg
}) 