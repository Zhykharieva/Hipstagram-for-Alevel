import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { regReducer } from "./regist/reducer";
import {authReducer} from './auth/reducer';
import {uiReducer} from './ui/reducer';
import { initThunk } from './thunks';
import { usersReducer } from './users/reducer';
import { postsReducer } from './posts/reducer';


const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    reg: regReducer,
    users: usersReducer,
    posts: postsReducer,
   
})

const middlewares = applyMiddleware(thunk)

const store = createStore(rootReducer, composeWithDevTools(middlewares))

store.dispatch(initThunk());

export default store;