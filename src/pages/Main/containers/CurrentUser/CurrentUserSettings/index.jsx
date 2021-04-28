import './styled.js';
import React from 'react';
import { connect, useSelector } from 'react-redux';
import Header from '../../../../../container/Header';
import { SettingsFormWrapper} from './styled.js';
import { FoundUserMsg } from '../../Users/FoundUsers/styled';
import { userConstants } from '../../../../../constants/users';
import UserFormInfo from '../../../../../container/forms/UserFormInfo/index.jsx';
import UserFormPassword from '../../../../../container/forms/UserFormPassword';
import Loader from '../../../../../components/Loader/index.jsx';

const mapDispatchToProps = dispatch => {
    return {
        startLoader: () => dispatch({type: userConstants.LOADER_START}),
        stopLoader: () => dispatch({type: userConstants.LOADER_STOP}),
       
    }
}


const CurrentUserSettings = ({startLoader, stopLoader}) => {
    const currentUser = useSelector(store => store.auth.currentUser);

    if (currentUser!==null){

        stopLoader();

        return (
            <>
            <Header>
                <FoundUserMsg >Settings</FoundUserMsg>
            </Header>
            <SettingsFormWrapper>
                <UserFormInfo/>
                <UserFormPassword/>
            </SettingsFormWrapper> 
            </>
        );
    }
    else{
        startLoader()
        return(
        
            <Loader/>
        )
    }
}

export default connect(null, mapDispatchToProps) (CurrentUserSettings);