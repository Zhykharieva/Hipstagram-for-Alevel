import api from './common';

class Posts {
    constructor(){
        this.api = api.api;
    }

    
    getUsersFeed(){
        return this.api.get('/posts/feed');
    }

    createComments(body){
        return this.api.post('/comments', body);
    }
    getComments(id){
        return this.api.get('/comments/'+id);
    }
    deleteComments(id){
        return this.api.delete('/comments/'+id);
    }
    updateComments(id, body){
        return this.api.patch('/comments/'+id, body);
    }
    getPost(id){
        return this.api.get('/posts/'+id);
    }
    likePost(id){
        return this.api.get('/posts/like/'+id);
    }
    createPost(body){
        return this.api.post('/posts', body);
    }
}

export default new Posts();