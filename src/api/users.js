import api from './common';

class Users {
    constructor(){
        this.api = api.api;
    }

    getCurrentUser(){
        
        return this.api.get('/users/current');
    }

    getAllUsers(){
        return this.api.get('/users');
    }


    getUsersByLogin(login){
        return this.api.get('/users/?search='+login);
    }


    getUsersById(id){
        return this.api.get('/users/'+id);
    }

    followUser(id){
        return this.api.get('/users/follow/'+id);
    }
    getFollowers(id){
        return this.api.get('/users/followersAndFollowing/'+id);
    }
    
    updateUsersInfo(body){
        return this.api.patch('/users/current', body);
    }

    deleteUser(id) {
        return this.api.delete('/users/'+id)
    }
}

export default new Users();