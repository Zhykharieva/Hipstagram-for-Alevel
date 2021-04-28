import styled from 'styled-components';

export const ErrorStyle = styled.p`

    color: red;
    
`;
export const Error = ({children})=>{
  return <ErrorStyle>{children}</ErrorStyle>
}
const emailRegExp =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

const userNameRegExp = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,16}$/;
 


 export const emailValidation =  {
  required: {
    value: true,
    message: <Error>'Email is require'</Error>,

  },
  pattern: {
    value: emailRegExp,
    message: <Error>'Email should consist @'</Error>
  }
}
 export const passwordValidation =  {
  required: {
    value: true,
    message: <Error>'password is require'</Error>,

  },
  minLength: {
    value: 8, 
    message: <Error>'Password should have min 8 symbols'</Error>
  },
  maxLength: {
    value: 16, 
    message: <Error>'Password should have max 16 symbols'</Error>
  }
}



export const textNameValidation =  {

    pattern: {
      value: userNameRegExp,
      message: <Error>'This field can consist of letters and numbers. First symbol is letter!!! '</Error>
    },
    minLength: {
      value: 2, 
      message: <Error>'This field should have min 2 symbols'</Error>
    },
    maxLength: {
      value: 16, 
      message: <Error>'This field should have max 16 symbols'</Error>
    }
  }