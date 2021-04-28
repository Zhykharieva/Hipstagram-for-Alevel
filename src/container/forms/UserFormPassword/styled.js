import styled from 'styled-components';
import { SettingsInfoBlockWrapper } from '../UserFormInfo/styled';
export const SettingsFormWrapper  = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    
    
`;
export const ErrorMsg  = styled.div`
    
   position: absolute;
   width: 300px;
   top: 50%;
   left: 50%;
   color: red;

    
    
`;
export const SettingsPasswordWrapper  = styled(SettingsInfoBlockWrapper)`
    
 color: black;
 }
    
    
`;
export const SettingsFormPassword  = styled.form`
    width:70%;
    padding: 30px;
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
    border-top: 1px solid gray;
`;

export const SettingsBtn = styled.button`
    
    
display: inline-block;
  width: 100%;
  padding: 10px;
  background-color: green;
  color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  list-style: none;
  text-transform: uppercase;
  text-align: center;
    display: flex;
    align-self: flex-end;
    @media (min-width: 768px) {
        background-color: blue;
        width: 200px;
        &:hover {
            background-color: green;
        }
        &:active {
            background-color: darken(green, 10%);
            color: rgba(255, 255, 255, 0.3);
        }

}

@media (min-width: 1300px) {
  
    padding: 20px 20px;
  
}
 
    
`;