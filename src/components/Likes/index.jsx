import { connect } from 'react-redux';
import './styled.js';
import React, {  useState } from 'react';
import {LikesPicture, LikesContents, LikesNumbers, LikesWrapper} from './styled'
import { postsApi} from '../../api/index.js';
import { withRouter } from 'react-router-dom';
import { postsConstants } from '../../constants/post.js';
import { userConstants } from '../../constants/users.js';
const mapDispatchToProps = dispatch => {
    return {
        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
        likePost: status => dispatch({type: postsConstants.LIKE_POST, payload: status}),
       
    }
}

const Likes = ({isLike, likeLength, likingLogin, likeStatus, id, likePost, startLoader, stopLoader}) => {

    const [status, SetStatus]= useState(likeStatus);
    const handleLike = async () => {
        startLoader()
        try {
            const like = await postsApi.likePost(id)
            likePost(like);
            SetStatus(!status)
        } catch(err) {
            
            alert(`Oops, something went wrong!!!   ${err.response.data} . `)
            console.log(err.response.data)

        } finally  {
            stopLoader()
        }

    }

return (

<LikesWrapper>
    <LikesPicture tabIndex='0' onClick={handleLike} isLiked={status}></LikesPicture>
    <LikesNumbers>{likeLength} </LikesNumbers>
    <LikesContents>
        <span >{isLike&& <><b>Likes</b>: {likingLogin} and { likeLength - 1} other</>}
                                           </span>
                                    
    </LikesContents>
                            
</LikesWrapper> 
)
}
export default connect(null, mapDispatchToProps) ( withRouter(Likes))
