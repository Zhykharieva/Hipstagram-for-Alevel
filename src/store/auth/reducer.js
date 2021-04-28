import { userConstants } from '../../constants/users';

const initialState = {
    isAuth: localStorage.getItem('token')? true : false,
    token: localStorage.getItem('token'),
    currentUser: null
}

export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case userConstants.INIT:
            return {
                ...state,
                isAuth: true,
                currentUser: action.payload
            }    
        case userConstants.LOGIN_REQUEST:
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                isAuth: true,
                token: action.payload
            }
   
        case userConstants.LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuth: false,
                token: null,
                currentUser: null
            }        
        default:
            return state    
    }
}