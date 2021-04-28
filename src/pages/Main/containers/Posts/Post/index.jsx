import './styled.js';
import React from 'react';
import { connect, useSelector } from 'react-redux';

import { PostWrapper, PostImg, PostContentWrapper, ClosedBtn } from './styled.js';

import { withRouter } from 'react-router-dom';

import { postsConstants } from '../../../../../constants/post.js';
import Likes from '../../../../../components/Likes'
import AuthorInfo from '../../../../../components/AthorInfo'
import CommentsSendForm from '../../../../../components/CommentsSendForm/index.jsx';
import Comments from '../../../../../components/Comments/index.jsx';


const mapDispatchToProps = dispatch => {
    return {
        
        closeModal: () => dispatch({type: postsConstants.CLOSE_POST}),
    }
}


const Post = ({ closeModal}) => {
   const currentPost = useSelector(store => store.posts.currentPost); 
   const isPost = useSelector(store => store.posts.isPost); 
   const isLike = currentPost.likes.length ? true : false
   const login = isLike ? currentPost.likes[0].login : ''
   const likes = currentPost.likes.length
   
const handleClose = () => {
 closeModal();
}    
    
    return (
        <>
     {isPost &&<>
     <PostWrapper>
         <ClosedBtn onClick={handleClose}>Close</ClosedBtn>
           <PostImg src={currentPost.imgUrl} alt="post picture"/>
           <PostContentWrapper>
            <AuthorInfo id={currentPost.ownerId}/>
            <Comments id={currentPost._id}/>
             <Likes isLike={isLike} likeLength={likes} likingLogin={login} id={currentPost._id} />
             <CommentsSendForm id={currentPost._id}/>
            

           </PostContentWrapper>
           
       </PostWrapper></>
    } 
    {!isPost && <h1>Loading</h1>}</> );
    

}
export default connect(null, mapDispatchToProps) ( withRouter( Post));