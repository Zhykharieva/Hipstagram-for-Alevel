import { userConstants } from '../../constants/users';
const initialState = {
    isRegist: localStorage.getItem('id') ? true : false,
    id: localStorage.getItem('id') || null,
    
}

export const regReducer = (state=initialState, action) => {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            localStorage.setItem('id', action.payload)
            return {
                ...state,
                isRegist: true,
                id: action.payload
            }    
        case userConstants.REGISTER_SUCCESS:
                return {};
        case userConstants.REGISTER_FAILURE:
                return {};
        default:
            return state    
    }
}