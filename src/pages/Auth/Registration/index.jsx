
import React from 'react';
import { connect } from 'react-redux';
import {authApi} from '../../../api'; 
import {Link, withRouter} from 'react-router-dom';
import withAuthWrapper from '../../../components/withAuthWrapper';
import { userConstants } from '../../../constants/users';
import { useForm } from 'react-hook-form';
import Input from '../../../components/Input';
import {  SettingsFormInfo, SettingsInfoBlockWrapper,  SettingsBtn} from './styled.js';
import { emailValidation, passwordValidation, textNameValidation } from '../../../utils/validation';


const mapDispatchToProps = dispatch => {
    return {
        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
        regist: id => dispatch({type: userConstants.REGISTER_REQUEST, payload: id}),
      
    }
}


const Registration = ({ regist, history, startLoader, stopLoader}) => {

    const {register, handleSubmit, errors} = useForm()

    const handleReg = async (data)=>{
        startLoader()
     
        const {login, email, password} = data;

        const body = {
            login: login,
            email: email,
            password: password
        }
        
        try {
            const {id } = await authApi.registration(body);
            regist(id)

        } catch(err) {
           
            alert(`Oops, something went wrong!!!   ${err.response.data} . `)
           
            
        
        } finally  {
            stopLoader()
            history.push('/auth/login')
        }
    }
    
    
    return (
    <>
        <SettingsFormInfo onSubmit={handleSubmit(handleReg)}>
            <SettingsInfoBlockWrapper>
            <h3>Sign Up</h3>
            <Input

            error= {errors.login}
            
            name="login"
            ref={register(textNameValidation)} 
            type="text"
            placeholder="Enter login"
            label="Login"
            defaultValue=''/>
            
                <Input
            error= {errors.email}
            name="email"
            ref={register(emailValidation)} 
            type="text"
            placeholder="Enter Email"
            label="Email"
            defaultValue=''/>
            <Input pass
            error= {errors.password}
            name="password"
            ref={register(passwordValidation)} 
            type="password" 
            placeholder="enter Password" 
            label="Password"/>
            
            </SettingsInfoBlockWrapper>
            <SettingsBtn type="submit">Sign up</SettingsBtn>
            <p>If You have an account you can <Link to='/auth/login'>Sign In</Link> </p>
        </SettingsFormInfo>
      
    </>
    );
}

export default  withAuthWrapper(connect(null, mapDispatchToProps)(withRouter(Registration)));