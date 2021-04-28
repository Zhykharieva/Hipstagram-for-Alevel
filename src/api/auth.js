import api from './common';

class Auth {
    constructor(){
        this.api = api.api;
    }

    registration(body){
        
        return this.api.post('/auth/registration', body)
    }

    login(body){
        return this.api.post('/auth/login', body);
    }

    updatePassword(body){
        return this.api.post('/auth/updatePassword', body);
    }
}

export default new Auth();