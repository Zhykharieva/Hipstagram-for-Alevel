import './styled.js';
import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { usersApi } from '../../api';
import { userConstants } from '../../constants/users';
import useDebounce from '../../utils/useDebounce';
import {Header as BaseHeader,  UserBlock,  Input as BaseInput,  CreatePost} from './styled'

const mapDispatchToProps = dispatch => {
    return {
    
        logOut: () => dispatch({type: userConstants.LOGOUT}),
        searchResult: (users) => dispatch({type: userConstants.SEARCH, payload: users}),
        getUser: (user) =>  dispatch({type: userConstants.GET_CURRENT_USER, payload: user}),
      
    }
}



const Header = ({logOut, searchResult, history, children}) => {
  
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const handleLogOut = () => {
        logOut()
        
    }
 
    useEffect(
            () => {
            
            if (debouncedSearchTerm) {
            
                setIsSearching(true);
                searchCharacters(debouncedSearchTerm)
                .then(results => {
                    setIsSearching(false);
                    setResults(results);
                });
            } else {
                setResults([]);
            }
            },
        
            [debouncedSearchTerm]
            );
  
    const searchCharacters = async (search) => {
        try {
            const foundUsers = await usersApi.getUsersByLogin(search)
            searchResult(foundUsers)          
                
         } catch(err) {
            const error = err.response.data
            alert(`Oops, something went wrong!!!  ${error} . `)
                       
        } finally  {
            history.push('/users')
        }
    }


    return (
        <>
         <BaseHeader>
            
             <BaseInput name='search' placeholder='search for user' onChange={e => setSearchTerm(e.target.value)} />
           
             {children}
            <UserBlock>
                <div>
                <CreatePost onClick={()=>{
                        
                        history.push(`/posts/creating`)
                        }}>Create Post</CreatePost>
           
                        <CreatePost onClick={()=>{
                        
                        history.push(`/`)
                        }} >Feed</CreatePost>
                    
                    
                    </div>
                <div>
                <CreatePost onClick={()=>{
                        
                        history.push(`/users/current`)
                        }}> Users profile
                   
                </CreatePost>
               
                    <Link to='/auth/login'>
                        <CreatePost onClick={handleLogOut} tabIndex='0'>Log out</CreatePost>
                    
                    
                    </Link>
                </div> 
            </UserBlock>
         </BaseHeader>
        </>
    );
}

export default connect(null, mapDispatchToProps) (withRouter ((Header)));