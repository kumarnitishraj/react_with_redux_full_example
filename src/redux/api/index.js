import axios from "axios";
import { SERVER_BASE_API } from '../../config/Constants';

const BASE_API = SERVER_BASE_API;

var api = axios.create({
    baseURL: BASE_API.URL
});

class Api {

    static headers(KEY) {

        return {
            'Authorization' : KEY, //This is not require for this application
            'Content-Type'  : 'application/json',
            'Accept'        :'json',
        }
    }

    static get(route, key=null) {

        return this.request(route, null, 'GET', key);
    }

    static put(route, params, key=null) {

        return this.request(route, params, 'PUT', key)
    }

    static post(route, params, key=null) {

        return this.request(route, params, 'POST', key)
    }

    static delete(route, key=null) {

        return this.request(route, null, 'DELETE', key)
    }

    static request(route, params, verb, key) {

        const host = BASE_API.URL;
        const url = `${host}${route}`
        const options = {
            'method'        : verb,
            'data'          : params,
        }
        options.headers = Api.headers(key)
        console.log(options,url)
        return axios(url, options);

    }
}
export default Api;
