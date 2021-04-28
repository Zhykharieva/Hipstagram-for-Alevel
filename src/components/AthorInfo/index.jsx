import { connect, useSelector } from 'react-redux';
import './styled.js';
import React, { useEffect } from 'react';
import {AuthorInfo as AuthorWrapper, Avatar, FollowBtn, AuthorLogin}  from './styled'
import { Link, withRouter } from 'react-router-dom';
import { usersApi } from '../../api/index.js';
import { userConstants } from '../../constants/users.js';

import catavatar from '../../img/cat-avatar.jpg'
import Loader from '../Loader/index.jsx';
const mapDispatchToProps = dispatch => {
    return {
        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
        getUserById: user => dispatch({type:  userConstants.GET_USER_BY_ID, payload: user}),
       
        
    }
}

const AuthorInfo = ({startLoader, stopLoader, getUserById, id}) => {
  
  const author = useSelector(store => store.users.User);
  
  useEffect(() => {
      startLoader();
      usersApi.getUsersById(id)
      .then(user => {
          
        getUserById(user)}
      )
      .catch(err => console.log(err.response.data))
      .finally(() => {
          stopLoader()
      })  
          
  
  }, [])

if(author){
return (
  <AuthorWrapper>
    <Link to={`/users/`+{id}}>
      <Avatar src={author.avatar||catavatar} alt="users avatar"/> 
      <AuthorLogin>{author.login}</AuthorLogin>
    </Link>
  
  
  </AuthorWrapper>

)}
else {
  startLoader();
  return <Loader/>
}
}
export default connect(null, mapDispatchToProps) ( withRouter(AuthorInfo))
