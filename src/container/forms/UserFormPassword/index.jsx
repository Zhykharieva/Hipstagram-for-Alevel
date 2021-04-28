import {  SettingsFormPassword, SettingsPasswordWrapper} from './styled.js';
import {  SettingsBtn, SettingsInfoBlock } from '../UserFormInfo/styled';
import {useForm} from 'react-hook-form';
import {   Error, passwordValidation} from '../../../utils/validation'
import Input from '../../../components/Input'
import { connect } from 'react-redux';
import { userConstants } from '../../../constants/users.js';
import { authApi } from '../../../api/index.js';

const mapDispatchToProps = dispatch => {
    return {
        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
       
    }
}

const UserFormPassword = ( { startLoader, stopLoader, pass}) => {
    
    const { getValues, register, handleSubmit, errors} = useForm()
   
    const passwordUpdateForm = async data => {
      startLoader();
      const {password, confirmPassword} = data;
     
      try {
        const body = {
          password: password,
          confirmPassword: confirmPassword
      }  
      await authApi.updatePassword(body);
      
      } catch(err) {
      
      alert(`Oops, something went wrong!!!   ${err.response.data} . `)
      console.log(err.response.data)
      
      } finally  {
      stopLoader()
      
      }
    
    }
  return (
      <>
      <SettingsFormPassword onSubmit={handleSubmit(passwordUpdateForm)}>
      <SettingsPasswordWrapper>
      <SettingsInfoBlock>
        <Input pass
         error= {errors.password}
         name="password"
         ref={register(passwordValidation)} 
         type="password" 
         placeholder="enter Password" 
         label="Password"/>
          </SettingsInfoBlock>
          <SettingsInfoBlock>
         <Input  pass={pass === true}
         error= {errors.password}
         name="confirmPassword"
         ref={register({

          validate: value =>

            value === getValues('password') || <Error>Password fields don't match</Error>
        })} 
         type="password" 
         placeholder="confirm Password" 
         label="Confirm Password"/>
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
         </SettingsInfoBlock>
          </SettingsPasswordWrapper>
         <SettingsBtn type="submit">Save password</SettingsBtn>
       </SettingsFormPassword > 
       </>
  )
}
export default connect(null, mapDispatchToProps)(UserFormPassword);