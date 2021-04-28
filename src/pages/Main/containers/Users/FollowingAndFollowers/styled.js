import styled from 'styled-components';


export const UserProfileMain = styled.main`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 70%;
    height: 100%;
    background-color:lightgray;
    
`;
 
export const UserAbout = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    margin: 10px auto;
     
    background-color: white;
`;
export const UserInfoWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin: 20px;
  color: gray;
  font-size: 20px;
  font-weight: 700;
 
   
`;
export const UserInfo = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
 
  margin-bottom: 20px
 
   
`;
export const FollowBtn = styled.button`
    padding: 10px;
    margin: 0 auto;
    width: 100%;
   background-color:  ${props => props.isFollow ? 'red' : 'blue'};
    
`;

export const UserPosts = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
 
   
`;