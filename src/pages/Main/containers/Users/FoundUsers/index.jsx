import './styled.js';
import React from 'react';
import { connect, useSelector } from 'react-redux';
import Header from '../../../../../container/Header';
import catavatar from '../../../../../img/cat-avatar.jpg';
import { FoundUserCard, FoundUserMsg, FoundUsers as FoundUsersList, FoundUsersNull, FollowBtn, InfoWrapper } from './styled.js';
import { withRouter } from 'react-router-dom';
import { userConstants } from '../../../../../constants/users.js';
import { usersApi } from '../../../../../api/index.js';
 
const mapDispatchToProps = dispatch => {
    return {
       
        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
        getUserById: user => dispatch({type:  userConstants.GET_USER_BY_ID, payload: user}),
        toggleFollow: () => dispatch({type: userConstants.FOLLOW_OR_UNFOLLOW_USER}),
        updateFoundUsers: users => dispatch({type:  userConstants.CHANGE_USER_STATUS, payload: users}),
    }
}      

const FoundUsers = ({history, toggleFollow, startLoader, stopLoader, updateFoundUsers}) => {
    const foundUsers = useSelector(store => store.users.foundUsers);
    const isFound = useSelector(store => store.users.isFound);
    const foundUsersResult = foundUsers ? <FoundUserMsg>Found {foundUsers.length} users</FoundUserMsg> : <FoundUserMsg>`Users not found`</FoundUserMsg> 
    const handleFollow = (e) => {
        const userId = e.target.name;
        const result = foundUsers.map(elem =>{
            if(elem._id === userId){
            elem.isFollow = !elem.isFollow
            return elem
            }
            return elem
        } )
        async function fetchData() {
        await usersApi.followUser(userId)
        .then(res => {
        toggleFollow()
        updateFoundUsers(result)
        })
        .catch(err => console.log(err.response.data))
        .finally(() => {
        history.push('/users/')
        })  
        }
        fetchData()
}
    return (
        <>
        <Header>
            <div >{foundUsersResult}</div>
        </Header>
        <FoundUsersList>
        {!isFound && <FoundUsersNull ></FoundUsersNull>} 
        {
        isFound && foundUsers.map(user => {
           const userId = user._id
           const isFollow = user.isFollow;
           const textBtn = isFollow ? `Unfollow` : `Follow`
       
           
                return (
                   <FoundUserCard key={userId}>
                     <InfoWrapper tabIndex='0' onClick={() => {
                            
                            history.push(`/users/${userId}`)
                                                    }}>      <img src={user.avatar||catavatar} width='70px'alt="Default-avatar"/>
                     
                                                    <h6>{user.login} </h6></InfoWrapper>  
                  
                       
                        
                        <FollowBtn name={userId} isFollow={isFollow} onClick={handleFollow}>{textBtn}</FollowBtn>
                        
                    </FoundUserCard>
                )
            })}  
        
        </FoundUsersList>
        </>
    );
       
}

export default connect(null, mapDispatchToProps)(withRouter(FoundUsers));