import styled from 'styled-components';



export const SettingsFormInfo  = styled.form`
    
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content:center;
  margin: 0 auto;
  margin-bottom: 30px;
  background-color: lightgray;
  opacity: 0.7;
  padding: 50px;
  
`;





export const SettingsInfoBlockWrapper  = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  
  
    
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
  align-self: center;
  margin-top: 20px;
    
    
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
