import axios from 'axios';
import store from '../store';

class Fetch {
    constructor(){
        this.api = axios.create({
            baseURL: 'https://hipstagram-api.herokuapp.com'
        })
        this._initInterceptors();
    }

    _initInterceptors(){
        this.api.interceptors.request.use(function (config) {
            const {token} = store.getState().auth;
            config.headers = {
                ...config.headers,
                'Content-Type': 'application/json' || "multipart/form-data",
                'Authorization': token,
            }
            return config;
          }, function (error) {
            // Do something with request error
            return Promise.reject(error);
          });

        this.api.interceptors.response.use(function (response) {
            return response.data;
            }, function (error) {
                if (error.response.status === 401) {
                    store.dispatch({type: 'LOGOUT'})
                }
            return Promise.reject(error);
        });
        
    }
}

export default new Fetch();