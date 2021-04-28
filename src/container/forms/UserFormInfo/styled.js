import styled from 'styled-components';


export const SettingsFormWrapper  = styled.div`
    
    margin: 0 auto;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    
`;
export const SettingsFormInfo  = styled.form`
    
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content:center;
  
`;

export const SettingsInfoBlock  = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  align-content:space-between;
    
`;

export const SettingsAvatarBlock  = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
  align-content:center;
  
    
`;
export const SettingsFormImage  = styled.img`
    
  border-radius: 50%;
  align-self: center;

`;

export const InputPhoto  = styled.input`
    
   display: none;
    
`;


export const SettingsInfoBlockWrapper  = styled.div`
    
    display: flex;
    flex-direction: row;
    width: 100%;
  
    
`;
export const SettingsFormPassword  = styled.form`
    
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
    
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
export const BtnPhoto  = styled(SettingsBtn)`
    width: 150px;
    padding: 10px 5px;
    border-radius: 20px;
    background-color: blue;
    color: white;
    list-style: none;
  text-transform: uppercase;
  align-self: center;
    
`;