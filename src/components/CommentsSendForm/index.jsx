import { connect } from 'react-redux';
import './styled.js';
import React from 'react';
import {CommentWrapperForm } from './styled'
import { withRouter } from 'react-router-dom';
import { postsApi } from '../../api/index.js';
import { userConstants } from '../../constants/users.js';
import { postsConstants } from '../../constants/post.js';
const mapDispatchToProps = dispatch => {
    return {
        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
        createComment: comment => dispatch({type: postsConstants.CREATE_COMMENT, payload: comment}),
        
    }
}

const CommentsSendForm = ({startLoader, stopLoader, createComment, id}) => {
  
    const sendComment = async (e) => {
        e.preventDefault()
        startLoader()
      
        const {comment} = e.target.elements;
       
        const body = {
          postId: comment.id,
          text: comment.value, 
          
        }
        try {
          const commentN = await postsApi.createComments(body);
          createComment(commentN);
        
        } catch(err) {
          console.log(err.response.data)
        
        } finally  {
          stopLoader()
        
        }
    }    

  return (
    <CommentWrapperForm onSubmit={sendComment}>
        <input name="comment" id={id} type="text"placeholder="Add comment"/>
        <button type="submit">Send</button>
    </CommentWrapperForm>

  )
}
export default connect(null, mapDispatchToProps) ( withRouter(CommentsSendForm))
