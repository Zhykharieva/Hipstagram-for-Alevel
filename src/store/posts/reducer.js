import { postsConstants } from '../../constants/post';


const initialState = {
    comment: null,
    postsComments: null,
    currentPost: null,
    isPost: false,
    likeStatus: {status:'unliked'},
    createdPost: null,

}

export const postsReducer = (state=initialState, action) => {
    switch (action.type) {
        case postsConstants.CREATE_COMMENT:
            return {
                ...state,
                postsComments: [...state.postsComments, action.payload]
            }
            case postsConstants.GET_COMMENT:
                return {
                    ...state,
                    postsComments: action.payload
                } 
                case postsConstants.DELETE_COMMENT:
                    return {
                        ...state,
                        postsComments: state.postsComments.filter(u => u.id !== action.payload)
                    } 
                    case postsConstants.UPDATE_COMMENT:
                     
                        let comments = state.postsComments.map(u => {
                            if(u.id === action.payload.id){
                                
                                 u.text = action.payload.comment
                                 return u 
                            }
                            else {
                                return u
                            }
                        }
                          )
                        return {
                            ...state,
                            postsComments: comments,
                        } 
                case postsConstants.GET_POST:
                    return {
                        ...state,
                        currentPost: action.payload,
                        isPost: true,
                    }  
                    case postsConstants.CLOSE_POST:
                    return {
                        ...state,
                        
                        isPost: false,
                    }  
                    case postsConstants.LIKE_POST:
                    return {
                        ...state,
                        
                        likeStatus: action.payload,
                    }                  
                    case postsConstants.CREATE_POST:
                        return {
                            ...state,
                            
                            createdPost: action.payload,
                        }                  
            
        default:
            return state    
    }
}