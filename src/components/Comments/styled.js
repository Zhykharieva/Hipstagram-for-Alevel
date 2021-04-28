import styled from 'styled-components';

export const CommentsWrapper = styled.div`
 
display:flex;
flex-direction: column;
flex: 1;
overflow: scroll;
width: 100%;
justify-content: space-between;
align-items: center;
 padding: 10px 0;
border: 1px solid gray;
 
`;
export const CommentWrapper = styled.div`
 
display:flex;
flex-direction: row;
flex: 1;
width: 100%;

align-items: center;
 padding: 10px 0;

 
`;
export const CommentsNumber = styled.div`
   font-size: 32px;
 margin-right: 10px;

`;

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    
    
    
    
`;
export const CommentText = styled.div`
 
 font-size: 25px;
 
 
`;
export const CommentDelete = styled.button`
 
 font-size: 15px;
 
 
`;
export const ModalForm = styled.form`
 width: 300px;
 background-color: lightgray;
 opacity: 0.9;
 position: absolute;
 display: flex;
 justify-content: center;
 align-items: center;
 font-weight: 700;
 z-index: 1000;
 left: 0;
 button{
   width: 50px;
   margin-top: 10px;

 }
 input {
   width: 80%;
 }
 
`;
