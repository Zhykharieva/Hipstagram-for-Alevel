import styled from 'styled-components';




export const PostWrapper = styled.div`
    
    position: fixed;
    max-width: 80%;
    
    top: 10%;
    left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
    
    display: flex;
    flex-direction: column;
    background-color:white;
    border: 1px solid gray;
    opacity: 1;
    z-index: 7;
    @media (min-width: 768px) {
        
        width: 70%;
        &:hover {
            background-color: lightgray;
        }
        &:active {
            background-color: darken(lightgray, 20%);
            color: rgba(255, 255, 255, 0.3);
        }

}
@media (min-width: 900px) {
        flex-direction: row;
        top: 5%;
        max-height: 80%;
        overflow: hidden;
        }
@media (min-width: 1300px) {
   width: 60%;
    padding: 20px 20px;

  
}
    
`;
export const PostImg = styled.img`
    max-height: 500px;
    width: 50%;

    
    
`;
export const PostContentWrapper = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    width: 50%;
    
    
    
    
`;


export const ClosedBtn = styled.button`
    position: absolute;
    left: 0;
    bottom: 90%;
    
    
    
    
`;
export const CommentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    
    
    
`;
