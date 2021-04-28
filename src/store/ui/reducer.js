import { userConstants } from "../../constants/users"

const initialState = {
    isLoader: false
}

export const uiReducer = (state=initialState, action) => {
    switch (action.type) {
        case userConstants.LOADER_START:
            return {
                ...state,
                isLoader: true,
            } 
        case userConstants.LOADER_STOP:
            return {
                ...state,
                isLoader: false,
            }                  
        default:
            return state    
    }
}