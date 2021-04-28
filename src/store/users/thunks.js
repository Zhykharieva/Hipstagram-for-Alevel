import {usersApi} from '../../api';
import { userConstants } from '../../constants/users';


export const getAllUsersThunk = () => {
    return async (dispatch) => {
        try {
            const users = await usersApi.getAllUsers();
            dispatch({type: 'GET_USERS', payload: users});
        } catch(e) {
            console.log(e);
        }
    }
}

export const deleteUserThunk = (id) => {
    return async (dispatch) => {
        try {
            const users = await usersApi.deleteUser(id);
            dispatch({type: 'DELETE_USER', payload: id});
        } catch(e) {
            console.log(e);
        }
    }
}

export const getUserIdThunk = (id) => {
    return async (dispatch) => {
        try {
            const user = await usersApi.getUsersById (id);
            dispatch({type: userConstants.GET_USER_BY_ID, payload: user});
        } catch(e) {
            console.log(e);
        }
    }
}