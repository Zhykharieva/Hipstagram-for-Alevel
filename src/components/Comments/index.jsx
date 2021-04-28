import { connect, useSelector } from 'react-redux';
import './styled.js';
import React, { useEffect, useState } from 'react';
import {CommentsWrapper, CommentWrapper, Avatar, CommentText, CommentDelete, ModalForm} from './styled'
import { withRouter } from 'react-router-dom';
import { postsApi } from '../../api/index.js';
import { userConstants } from '../../constants/users.js';
import { postsConstants } from '../../constants/post.js';
import catavatar from '../../img/cat-avatar.jpg'


const mapDispatchToProps = dispatch => {
    return {
        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
        takeComments: comment => dispatch({type: postsConstants.GET_COMMENT, payload: comment}),
        deleteComment: id => dispatch({type: postsConstants.DELETE_COMMENT, payload: id}),
        updateComment: (id, comment) => dispatch({type: postsConstants.UPDATE_COMMENT, payload: {id: id, comment: comment}}),
    }
}

const Comments = ({startLoader, stopLoader, takeComments, id, deleteComment, updateComment}) => {
    const currentPostComments = useSelector(store => store.posts.postsComments);
    const isComment = currentPostComments ? true : false; 
   
   const [edition, setEdition] = useState({
     isEdit: false,
     id: null,
     text: null, 
   })
  
    useEffect( ()=> {   
      async function fetchData() {
      startLoader()

      try {
          const comments = await  postsApi.getComments(id);
      debugger
          takeComments(comments)

      } catch(err) {
          
          alert(`Oops, something went wrong!!!   ${err.response.data} . `)
         

      } finally  {
          stopLoader()
         
         

      }

  


    }
    fetchData();
  }, [])
  const handleDelete = (e) => {
    
    const {id} = e.target;
    postsApi.deleteComments(id)
    .then(()=> {
      deleteComment(id)
    })
    .catch(err => console.log(err.response.data))
   
}
const handleUpdateShow = (e) => {

  const {id, name: text} = e.target;
 setEdition({
   isEdit: true,
   id: id,
   text: text
 })

}
const handleUpdate = (e) => {

  e.preventDefault();
  const {comment} = e.target.elements;
   const body = {
     text: comment.value
   } 
  
  postsApi.updateComments(edition.id, body)
  .then((res)=> {
   
   
    updateComment(edition.id, body.text)
  })
  .catch(err => console.log(err.response.data))
  .finally(()=> {
    setEdition({
      isEdit: false,
      id: null,
      text: null, 
    })
  })
 
}

    
if(isComment){
return (
  <>
  <CommentsWrapper>
       
      {currentPostComments.map(comment =>{
     
        return(
          <>
          <CommentWrapper key={comment.id}>
            <Avatar src={comment.owner.avatar||catavatar} alt="users avatar"/>
            <CommentText> <b>{comment.owner.login}</b>: {comment.text}
                <CommentDelete id={comment.id} onClick = {handleDelete}>Delete</CommentDelete> 
                <button id={comment.id} name={comment.text} onClick = {handleUpdateShow}>Edit</button> 
               
            </CommentText>
          </CommentWrapper>
         
          </> 
          )
        }
      )} 
    
  </CommentsWrapper>
  {edition.isEdit && <ModalForm onSubmit={handleUpdate}>
      <input name="comment" id={edition.id} type="text"placeholder="Edit comment" defaultValue={edition.text}/>
      <button type="submit">Edit</button>
      <button type="button" onClick={()=> setEdition({
      isEdit: false,
      id: null,
      text: null, 
    })}>Close</button>
    </ModalForm>} 

</>
)
}
else {
  startLoader();
 return <CommentWrapper>This post hasn't had any comments. Write something!</CommentWrapper>
}
}
export default connect(null, mapDispatchToProps) ( withRouter(Comments))
