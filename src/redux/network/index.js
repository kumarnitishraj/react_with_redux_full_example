import Api from '../api';
import { APP_URL } from '../../config/Constants'

export const login = (params) => {
    return Api.post(APP_URL.LOGIN, params).then(res=>res.data);
}

export const register = (params) => {
    return Api.post(APP_URL.REGISTER, params).then(res=>res.data);
}

export const getPgLists = (params) => {
    let url = APP_URL.PGROOM+"/"+params.userId
    return Api.get(url,params.token).then(res=>res.data);
}

export const pgDetail = (params) => {
    let url = APP_URL.PGDETAIL+"/"+params.id
    return Api.get(url,params.token).then(res=>res.data);
}

export const updatePg = (params) => {
    let url = APP_URL.PGROOM+'/'+params.id
    return Api.put(url, params, params.token).then(res=>res.data);
}

export const deletePg = (params) => {
    let url = APP_URL.PGROOM+'/'+params.id
    return Api.delete(url,params.token).then(res=>res.data);
}

export const addPg = (params) => {
    let url = APP_URL.PGROOM
    return Api.post(url,params,params.token).then(res=>res.data);
}

export const addGuest = (params) => {
    let url = APP_URL.GUEST
    return Api.post(url,params,params.token).then(res=>res.data);
}

export const getGuestReletedPg = (params) => {
    let url = APP_URL.GUEST_PG+"/"+params.id
    return Api.get(url,params.token).then(res=>res.data);
}

export const getGuest = (params) => {
    let url = APP_URL.GUEST+"/"+params.id
    return Api.get(url,params.token).then(res=>res.data);
}

export const updateGuest = (params) => {
    let url = APP_URL.GUEST+"/"+params.id
    return Api.put(url,params,params.token).then(res=>res.data);
}

export const deleteGuest = (params) => {
    let url = APP_URL.GUEST+'/'+params.id
    return Api.delete(url,params.token).then(res=>res.data);
}