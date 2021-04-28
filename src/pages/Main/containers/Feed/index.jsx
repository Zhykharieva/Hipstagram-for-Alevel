import './styled.js';
import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import Header from '../../../../container/Header';
import { FoundUserMsg } from '../Users/FoundUsers/styled';
import { userConstants } from '../../../../constants/users';
import { withRouter } from 'react-router-dom';
import { postsApi, usersApi } from '../../../../api/index';
import { PostsWrapper, PostCard   } from './styled.js';
import { postsConstants } from '../../../../constants/post.js';
import Post from '../Posts/Post/index.jsx';
import Likes from '../../../../components/Likes';
import CommentsSendForm from '../../../../components/CommentsSendForm/index.jsx';
import Loader from '../../../../components/Loader/index.jsx';

const mapDispatchToProps = dispatch => {
    return {
        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
        getFeed: feed => dispatch({type: userConstants.GET_USER_FEED, payload: feed}),
        createComment: comment => dispatch({type: postsConstants.CREATE_COMMENT, payload: comment}),
        getPost: post => dispatch({type: postsConstants.GET_POST, payload: post}),
        initDispatch: currentUser => dispatch({type: userConstants.INIT, payload: currentUser}),
    }
}


const UsersFeed = ({getFeed, startLoader, stopLoader,  getPost, initDispatch, history}) => {
    const feed = useSelector(store => store.users.userFeed); 
    const isFeed = feed ? true : false;
    const isPost = useSelector(store => store.posts.isPost);
    const currentUser = useSelector(store => store.auth.currentUser); 

    useEffect(
        () => {
            async function fetchData() {
            startLoader();

        try{ const user = await usersApi.getCurrentUser()
            initDispatch(user);
        
            
            const res = await postsApi.getUsersFeed()
                getFeed(res)
        }catch(err) {
            const error = err.response.data
            alert(`Oops, something went wrong!!!  ${error} . `)
            console.log(error)
        
        } finally  {
            stopLoader()
            
        }
        return(
    
            <h1>loading</h1>
        )
        }
        fetchData()
    }, [] 
    ) 

    const handleClick = async(e) => {
    
        startLoader()
    
        const {id} = e.target;
    
        
    try{
        const currentPost = await postsApi.getPost(id);
        getPost(currentPost)

    } catch(err) {
    
    
    console.log(`Oops, something went wrong!!!    . `)
    

    } finally  {
    stopLoader()
    }
  }       

    return (
        <>
        {isFeed&&<>
      
         <Header>
            <FoundUserMsg >Feed</FoundUserMsg>
        </Header>
        <PostsWrapper>
           { 
                feed.map(post => {
                    let likes = post.likes.length;
                    let isLike = post.likes.length ? true : false;
                    const login = isLike ? post.likes[0].login : '';
                    const likesArr = post.likes.find(item => item.login === currentUser.login);
                    const isLiked = likesArr ? true : false;
                  

                    return(
                        
                        <PostCard key={post._id} >
                        <h2>{post.title}</h2>
                        <img src={post.imgUrl} name="postCard" tabIndex="0" onClick={handleClick} id={post._id} width='100%'alt="post picture"/>
                  
                        <Likes isLike={isLike} likeLength={likes} id={post._id} likingLogin={login } likeStatus={isLiked}/>
                        <CommentsSendForm id={post._id}/>
                                             
                        </PostCard>
                        
                    )
                })
           }
        </PostsWrapper>
       </>}
        {isPost && <Post/>}
        {!isFeed&& <Loader/>}
        </>
    );


}
export default connect(null, mapDispatchToProps) ( withRouter( UsersFeed));