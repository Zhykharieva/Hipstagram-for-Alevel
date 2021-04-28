import { userConstants } from "../constants/users";
import { getCurrentUserThunk } from "./auth/thunks";


export const initThunk = () => {
    return async dispatch => {
        try {
            dispatch({type: userConstants.LOADER_START});
            await dispatch(getCurrentUserThunk())
            
        } catch(e) {
            console.log(e)
        } finally {
            dispatch({type: userConstants.LOADER_STOP})
        }
    }
}