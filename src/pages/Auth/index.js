
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect} from 'react-router-dom'


const Auth = () => {
 const  isRegist = useSelector(store => store.reg.isRegist)
   
    return (
        isRegist ? <Redirect to="/auth/login" /> : <Redirect to="/auth/registration" />
    )
}

export default Auth;