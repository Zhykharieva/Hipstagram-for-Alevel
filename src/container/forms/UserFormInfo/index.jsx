import {  SettingsFormInfo, SettingsInfoBlockWrapper,  SettingsBtn, SettingsInfoBlock, InputPhoto, SettingsFormImage, BtnPhoto, SettingsAvatarBlock} from './styled.js';
import {useForm} from 'react-hook-form';
import {textNameValidation, emailValidation} from '../../../utils/validation'
import Input from '../../../components/Input'
import { connect, useSelector } from 'react-redux';
import { userConstants } from '../../../constants/users.js';
import { usersApi } from '../../../api/index.js';
import catavatar from '../../../img/cat-avatar.jpg'
import { useRef, useState } from 'react';

const mapDispatchToProps = dispatch => {
    return {
        getCurrentUser: user => dispatch({type:  userConstants.INIT , payload: user}),
        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
        initDispatch: currentUser => dispatch({type: userConstants.INIT, payload: currentUser}),
    }
}

const UserFormInfo = ({initDispatch, startLoader, stopLoader}) => {
    const currentUser = useSelector(store => store.auth.currentUser);
    const {register, handleSubmit, errors} = useForm();
    const [pictureN, setPicture] = useState({
      imagePreviewUrl: currentUser.avatar
    });
    const hiddenFileInput = useRef(null);
    const avatar = 'https://pbs.twimg.com/profile_images/460786917462667264/466ihLxH_400x400.jpeg';

    const handleClick =()=> {
      hiddenFileInput.current.click();
    }
    const onChange = (e) => {
      let reader = new FileReader();
      let file = e.target.files[0];
      if(file !== null){
        reader.onloadend = () => {
          setPicture({
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
      else{
      return   setPicture({
        
          imagePreviewUrl: currentUser.avatar || avatar
      })
      }
      }

      const loginForm = async data => {
        startLoader()
        const {login, firstName, lastName, email, avatar} = data;

        const body = {
          login: login, 
          firstName: firstName, 
          lastName: lastName, 
          email: email, 
          avatar: pictureN.imagePreviewUrl || avatar
        }

        try {
          await usersApi.updateUsersInfo(body);
          const updatedUser = await usersApi.getCurrentUser()
          initDispatch(updatedUser)
        
        } catch(err) {
          alert(`Oops, something went wrong!!!   ${err.response.data} . `)
        
        } finally  {
          stopLoader()
        
        }
    } 
  
  return (
      <>
       <SettingsFormInfo onSubmit={handleSubmit(loginForm)}>
          <SettingsInfoBlockWrapper>
          <SettingsInfoBlock>
           <SettingsAvatarBlock>
           <SettingsFormImage src={pictureN.imagePreviewUrl||catavatar} width='100px'alt="Default-avatar"/>
           <InputPhoto ref={hiddenFileInput} type="file" name="picture" onChange={onChange}/>
           <BtnPhoto onClick={handleClick}>Change avatar</BtnPhoto>
           </SettingsAvatarBlock>    
        <Input

          error= {errors.login}
        
          name="login"
          ref={register(textNameValidation)} 
          type="text"
          placeholder="Enter login"
          label="Login"
          defaultValue={currentUser.login}/>
        
          </SettingsInfoBlock>
          <SettingsInfoBlock>             <Input 
          error= {errors.firstName}
          name="firstName"
          ref={register(textNameValidation)} 
          type="text"
          placeholder="Enter Your name"
          label="First name"
          defaultValue={currentUser.firstName}/>
        
             <Input 
          error= {errors.lastName}
          name="lastName"
          ref={register(textNameValidation)} 
          type="text"
          placeholder="Enter your last name"
          label="Last Name"
          defaultValue={currentUser.lastName}/>
             <Input
          error= {errors.email}
          name="email"
          ref={register(emailValidation)} 
          type="text"
          placeholder="Enter Email"
          label="Email"
          defaultValue={currentUser.email}/>
        
        </SettingsInfoBlock>
        </SettingsInfoBlockWrapper>
        <SettingsBtn type="submit">Save profile</SettingsBtn>
      </SettingsFormInfo>
      </>
  )
}
export default connect(null, mapDispatchToProps)(UserFormInfo);