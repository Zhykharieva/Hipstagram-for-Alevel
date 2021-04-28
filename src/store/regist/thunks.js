import {usersApi} from '../../api'


export const getCurrentUserThunk = () => {
    return async (dispatch, getState) => {
        try {
            const currentUser = await usersApi.getCurrentUser();
            dispatch({type: 'REGIST', payload: currentUser.id})
        } catch(e) {
            console.log(e)
        }
    }
}