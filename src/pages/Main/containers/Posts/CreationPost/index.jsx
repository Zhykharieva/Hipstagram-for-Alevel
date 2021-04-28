import './styled.js';
import React from 'react';
import { connect } from 'react-redux';
import { postsConstants } from '../../../../../constants/post.js';
import { withRouter } from 'react-router-dom';
import { postsApi } from '../../../../../api/index.js';
import { userConstants } from '../../../../../constants/users.js';
import Header from '../../../../../container/Header/index.jsx';


const mapDispatchToProps = dispatch => {
    return {
        getCreatedPost: post => dispatch({type:  postsConstants.CREATE_POST , payload: post}),
        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
        
    }
}

const CreationPost = ({ getCreatedPost, startLoader, stopLoader, history}) => {

   

    const loginForm = async (e) => {
      startLoader()
      e.preventDefault();
      const {title, image} = e.target.elements;
      const form = new FormData();

      form.append('image', image.files[0]);
      form.append('title', title.value);


      try {
        const post = await postsApi.createPost(form);
        getCreatedPost(post)
      
      } catch(err) {
        
        alert(`Oops, something went wrong!!!   ${err.response.data} . `)
        console.log(err.response.data)
      
      } finally  {
        stopLoader();
        history.push('/users/current')
        
      
      }
      } 
        
    return (
      <>
      <Header/>
      <form onSubmit={loginForm}>
        <input type="text" name="title"/>
        <input type="file" name="image" />
        <button type='submit'>create post</button>
      </form>
       
     </> );
    

}
export default connect(null, mapDispatchToProps) ( withRouter( CreationPost));