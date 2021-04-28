import './styled.js';
import {  FoundUserMsg } from '../FoundUsers/styled';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../../../../container/Header';
import catavatar from '../../../../../img/cat-avatar.jpg';
import {connect} from 'react-redux';
import { postsApi, usersApi } from '../../../../../api/index.js';
import { userConstants } from '../../../../../constants/users.js';
import { UserProfileMain, UserAbout, UserInfo, UserInfoWrapper, UserPosts, Image } from './styled.js';
import { withRouter } from 'react-router-dom';
import { postsConstants } from '../../../../../constants/post.js';
import Post from '../../Posts/Post'

 

const mapDispatchToProps = dispatch => {
    return {
        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
        getUserById: user => dispatch({type:  userConstants.GET_USER_BY_ID, payload: user}),
        toggleFollow: () => dispatch({type: userConstants.FOLLOW_OR_UNFOLLOW_USER}),
        deleteUser: user => dispatch({type:  userConstants.DELETE_USER, payload: user}),
        getFollowers: user => dispatch({type:  userConstants.FOLLOWERS_FOLLOWING, payload: user}),
        getPost: post => dispatch({type: postsConstants.GET_POST, payload: post}),
      
    }
}

      

const UserProfile = ( {getUserById, userId, startLoader, stopLoader, history,  getFollowers, getPost}) => {
    const user = useSelector(store => store.users.User);
    const isPost = useSelector(store => store.posts.isPost);

    
    useEffect(() => {
        startLoader();
        usersApi.getUsersById(userId)
        .then(user => {
          getUserById(user)}
        )
        .catch(err => console.log(err.response.data))
        .finally(() => {
            stopLoader()
        })  
            
    
    }, [])

    const handleFollowing =async()=>{
        await usersApi.getFollowers(userId)
        
        .then(res=> 
            {
                
                getFollowers(res)
            })
        .catch(err => console.log(err.response.data))
    .finally(() => {
    history.push('/users/followersAndFollowing/'+userId)
     
    })  

    }
    const handleShow = async(e) => {
    
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


   
    if (user !== null ){
        stopLoader();

    return (
        <>
        <Header>
        <FoundUserMsg>{user.login}</FoundUserMsg>
        </Header>
        <UserProfileMain>
         
            <UserAbout>
            <img src={user.avatar||catavatar} width='100px'alt="Default-avatar"/>
            <UserInfoWrapper>
                <UserInfo>
                <div>{user.posts.length} posts</div>
                <div tabIndex="0" onClick={handleFollowing}>{user.followersCount} followers</div>
                <div tabIndex="0" onClick={handleFollowing}>{user.followingsCount} followings</div>
                </UserInfo>
                

            </UserInfoWrapper>
            </UserAbout>
            <UserPosts>{user.posts.map((post)=> {
                
                return (
                    <Image tabIndex="0" id={post._id} src={post.imgUrl||catavatar} key={post._id+post.title} onClick={handleShow} alt="Default-post-img"/>
                )
            })}</UserPosts>
        </UserProfileMain>
        {isPost && <Post/>}
        </>
    );
}
else{
    startLoader()
    return(
      
        <h1>loading</h1>
    )
}
}

export default connect(null, mapDispatchToProps)(withRouter( UserProfile));