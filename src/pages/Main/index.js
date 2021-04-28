import './style.css';
import React from 'react';
import { useSelector } from 'react-redux';
import UsersFeed from './containers/Feed';
import { Redirect} from 'react-router-dom'

      

const HomePage = () => {
    const isAuth = useSelector(store => store.auth.isAuth);

    return (
        isAuth ?  <UsersFeed /> : <Redirect to="/auth" />
    );
}

export default HomePage ;