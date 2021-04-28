import './styled.js';
import {  FoundUserMsg, FoundUserCard, InfoWrapper,  } from '../FoundUsers/styled';
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../../../../container/Header';
import catavatar from '../../../../../img/cat-avatar.jpg';
import {connect} from 'react-redux';
import { usersApi } from '../../../../../api/index.js';
import { userConstants } from '../../../../../constants/users.js';
import { withRouter } from 'react-router-dom';
import Loader from '../../../../../components/Loader/index.jsx';


const mapDispatchToProps = dispatch => {
    return {
        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
        getUserById: user => dispatch({type:  userConstants.GET_USER_BY_ID, payload: user}),
        toggleFollow: () => dispatch({type: userConstants.FOLLOW_OR_UNFOLLOW_USER}),
        deleteUser: user => dispatch({type:  userConstants.DELETE_USER, payload: user}),
        getFollowers: user => dispatch({type:  userConstants.FOLLOWERS_FOLLOWING, payload: user}),
        updateFoundUsers: users => dispatch({type:  userConstants.GET_USER_BY_ID, payload: users}),
      
    }
}

const FollowingAndFollowers = ( {startLoader, stopLoader,  history, getFollowers, userId}) => {

    const users = useSelector(store => store.users.followersAndFollowing);
    if (users !== null ){
    const {followers, following} = users;
    const isFollowing = following.length ? true : false
    const isFollower = followers.length ? true : false
 
    stopLoader();
    return (
        <>
        <Header>
        <FoundUserMsg>Followers and following</FoundUserMsg>
        </Header>
    <h2>Followers: {followers.length} users</h2>
    {
        isFollower && users.followers.map(user => {
     
            const userId = user.id
           
           
                return (
                   <FoundUserCard key={userId}>
                     <InfoWrapper tabIndex='0'  onClick={() => {
                            
                            history.push(`/users/${userId}`)
                                                    }}>     
                     <img src={user.avatar||catavatar} width='70px'alt="Default-avatar"/>
                     
                    <h6>{user.login} </h6></InfoWrapper>  
     
                        
                        
                     </FoundUserCard>
                )
            })}  
          
    <h2>Following: {following.length} users</h2>
        {
        isFollowing && users.following.map(user => {
     
            const userId = user.id
           
           
                return (
                   <FoundUserCard key={userId}>
                     <InfoWrapper tabIndex='0' onClick={() => {
                            
                            history.push(`/users/${userId}`)
                                                    }}>     
                     <img src={user.avatar||catavatar} width='70px'alt="Default-avatar"/>
                     
                    <h6>{user.login} </h6></InfoWrapper>  
                  
              
                        
                        
                     </FoundUserCard>
                )
            })}  
          
        </>
    );
}
else{
    startLoader();
(async() => {
    try {
        const userR = await usersApi.getFollowers(userId);
        getFollowers(userR)

    } catch(err) {
        
        alert(`Oops, something went wrong!!!   ${err.response.data} . `)
        console.log(err.response.data)

    } finally  {
        stopLoader()
        history.push('/users/followersAndFollowing/'+userId)

    }

 })()
   

    return (
       <Loader/>
    )
}

}

export default connect(null, mapDispatchToProps)(withRouter( FollowingAndFollowers));