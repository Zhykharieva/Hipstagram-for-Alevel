import styled from 'styled-components';
import userNull from '../../../../../img/found-null.jpg';

export const FoundUsers = styled.main`
    display: flex;
    flex-direction: column;
`;
 
export const FoundUserCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid green;
    width: 50%;
    margin: 10px auto;
    background-color: rgb(228, 238, 222);
`;
export const FoundUserMsg = styled.div`
  color: white;
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
   
`;

export const FoundUsersNull = styled.div`
    display: flex;
    margin: 0 auto;
    width: 50%;
    height: 400px;
    background-image: url(${userNull});
    background-repeat: no-repeat;
    background-position: center;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    flex: 1;
    padding-right: 30%;
   
    
`;

export const FollowBtn = styled.button`
  background-color: ${props => props.isFollow ? 'red' : 'blue'};
  color: white;
  margin: 0;
  
`;