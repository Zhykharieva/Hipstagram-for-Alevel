import {usersApi} from '../../api'
import { userConstants } from '../../constants/users';



export const getCurrentUserThunk = () => {
    return async (dispatch, getState) => {
        try {
            const currentUser = await usersApi.getCurrentUser();
            dispatch({type: userConstants.INIT, payload: currentUser})
        } catch(e) {
            console.log(e)
        }
    }
}