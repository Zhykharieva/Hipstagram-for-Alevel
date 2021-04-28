import './styled.js';
import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import Header from '../../../../../container/Header';
import catavatar from '../../../../../img/cat-avatar.jpg';
import { Image, SettingsBtn } from './styled.js';
import { FoundUserMsg } from '../../Users/FoundUsers/styled';
import Loader from '../../../../../components/Loader'
import {UserProfileMain, UserAbout, UserInfo, UserInfoWrapper, UserPosts} from '../../Users/UserProfile/styled'
import { userConstants } from '../../../../../constants/users.js';
import { withRouter } from 'react-router-dom';
import { postsApi, usersApi } from '../../../../../api/index.js';
import { postsConstants } from '../../../../../constants/post.js';
import Post from '../../Posts/Post'

const mapDispatchToProps = dispatch => {
    return {
        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
        initDispatch: currentUser => dispatch({type: userConstants.INIT, payload: currentUser}),
        getFollowers: user => dispatch({type:  userConstants.FOLLOWERS_FOLLOWING, payload: user}),
        getPost: post => dispatch({type: postsConstants.GET_POST, payload: post}),
    }
}


const CurrentUserProfile = ({initDispatch, history, startLoader, stopLoader, getFollowers, getPost}) => {
    const currentUser = useSelector(store => store.auth.currentUser); 
    const isCurrentUser = currentUser ? true : false;
    const isPost = useSelector(store => store.posts.isPost);

    useEffect(() => {
            async function fetchData() {
            startLoader();
        
        try{ const user = await usersApi.getCurrentUser()
                initDispatch(user);

        }catch(err) {
            const error = err.response.data
            alert(`Oops, something went wrong!!!  ${error} . `)
            console.log(error)
        
        } finally  {
            stopLoader()
            
        }
        return(
    
            <Loader/>
        )
            }
            fetchData()
        }, []);

    const handleDelete = () => {

        usersApi.deleteUser(currentUser.id)
        .catch(err => console.log(err.response.data))
        .finally(() => { history.push('/auth/registration')})  
    }
    const handleFollowing =async()=>{
        await usersApi.getFollowers(currentUser.id)
        
        .then(res=> 
            {
                
                getFollowers(res)
            })
        .catch(err => console.log(err.response.data))
    .finally(() => {
    history.push('/users/followersAndFollowing/'+currentUser.id)
     
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
  
            

    
    return (
        <>
        {isCurrentUser&&<>
         <Header>
            <FoundUserMsg >{currentUser.login}</FoundUserMsg>
        </Header>
        <UserProfileMain>
            <div><SettingsBtn onClick={handleDelete}>Delete profile</SettingsBtn>
        <SettingsBtn  onClick={() => {
                            
                            history.push(`/users/current/settings`)
                                                    }}>Settings</SettingsBtn></div>
        

            <UserAbout>
            <img src={currentUser.avatar||catavatar} width='100px'alt="Default-avatar"/>
            <UserInfoWrapper>
                <UserInfo>
                <div>{currentUser.posts.length} posts</div>
                <div tabIndex="0" onClick={handleFollowing}>{currentUser.followers.length} followers</div>
                <div tabIndex="0" onClick={handleFollowing}>{currentUser.following.length} followings</div>
                </UserInfo>
                
            </UserInfoWrapper>
            </UserAbout>
            <UserPosts>{ 
            currentUser.posts.map((post)=> {
                
                return (
                    <Image tabIndex="0" id={post._id} src={post.imgUrl||catavatar} key={post._id} onClick={handleShow} alt="Default-post-img"/>
                )
            }) }
            </UserPosts>
        </UserProfileMain>
        </>}
        {isPost && <Post/>}
        {!isCurrentUser&& <Loader/>}
        </>
    );


}
export default connect(null, mapDispatchToProps) ( withRouter( CurrentUserProfile));