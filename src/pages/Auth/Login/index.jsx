
import { userConstants } from '../../../constants/users';
import React from 'react';
import {connect} from 'react-redux';
import {authApi, usersApi} from '../../../api'; 
import {Link, withRouter } from 'react-router-dom';
import withAuthWrapper from '../../../components/withAuthWrapper';
import { passwordValidation, textNameValidation } from '../../../utils/validation';
import { useForm } from 'react-hook-form';
import Input from '../../../components/Input';
import {  SettingsFormInfo, SettingsInfoBlockWrapper,  SettingsBtn} from './styled.js';


const mapDispatchToProps = dispatch => {
    return {
        loginDispatch: token => dispatch({type: userConstants.LOGIN_REQUEST, payload: token}),
        initDispatch: currentUser => dispatch({type: userConstants.INIT, payload: currentUser}),

        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
    }
}

const Login = ({loginDispatch, initDispatch, startLoader, stopLoader, history}) => {
 
    const {register, handleSubmit, errors} = useForm()
    const handleLogin = async (data) => {
        startLoader()
        
        const {login, password} = data;
        const body = {
            login: login,
            password: password,
        }

        try {
            const {access_token} = await authApi.login(body);
            loginDispatch(access_token);
            const currentUser = await usersApi.getCurrentUser();
            initDispatch(currentUser)

        } catch(err) {
            
            alert(`Oops, something went wrong!!!   ${err.response.data} . `)
           

        } finally  {
            stopLoader()
            
            history.push('/')

        }

    }
    
    return (
        <>
        <SettingsFormInfo onSubmit={handleSubmit(handleLogin)}>
            <SettingsInfoBlockWrapper>
            <h3>Sign In</h3>
            <Input

            error= {errors.login}
            
            name="login"
            ref={register(textNameValidation)} 
            type="text"
            placeholder="Enter login"
            label="Login"
            defaultValue=''/>
            
            <Input pass
            error= {errors.password}
            name="password"
            ref={register(passwordValidation)} 
            type="password" 
            placeholder="enter Password" 
            label="Password"/>
            
            </SettingsInfoBlockWrapper>
            <SettingsBtn type="submit">Sign in</SettingsBtn>
            <p>If You don't have an account you can <Link to='/auth/registration'>Sign Up</Link> </p>
        </SettingsFormInfo>
        </>
        
      
    );
}

export default withAuthWrapper(connect(null, mapDispatchToProps)(withRouter(Login)));