
import { userConstants } from "../../constants/users"

const initialState = {
    foundUsers: null,
    isFound: false,
    isFollow: false,
    User: null,
    followersAndFollowing: null,
    userFeed: null,
}

export const usersReducer = (state=initialState, action) => {
    switch (action.type) {
      
        case userConstants.GET_USER_BY_ID:
            const user = action.payload
            return {
                ...state,
                User: user,
            }
        case userConstants.FOLLOW_OR_UNFOLLOW_USER:
            
            return {
                    ...state,
                    isFollow:!state.isFollow,
                }
                case userConstants.FOLLOWERS_FOLLOWING:
            
                    return {
                            ...state,
                            followersAndFollowing:action.payload,
                        }
                case userConstants.CHANGE_USER_STATUS:
         
                    return {
                            ...state,
                            foundUsers: action.payload
                        }
        case userConstants.DELETE_USER:
            return {
                ...state,
                foundUsers: action.payload
            }
            case userConstants.GET_USER_FEED:
            return {
                ...state,
                userFeed: action.payload
            }
        case userConstants.SEARCH:
        const isFound = action.payload.length ? true : false
                return {
                    ...state,
                    foundUsers: action.payload,
                    isFound: isFound,
                }
        default:
            return state    
    }
}