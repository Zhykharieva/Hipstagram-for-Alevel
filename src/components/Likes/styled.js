import styled from 'styled-components';
import heart from '../../img/heart.png'
export const LikesWrapper = styled.div`
    
display:flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 10px 0;
border: 1px solid gray;
 
`;

export const LikesPicture = styled.div`
 
 width: 40px;
 height: 40px;
 background-image: url(${heart});
 background-repeat: no-repeat;
 background-position: center;
 padding: 5px;
 opacity: ${(props)=>props.isLiked ? 1 : 0.5}
`;

export const LikesNumbers = styled.div`
 
 font-size: 32px;
 margin-right: 10px;
 
`;
export const LikesContents = styled.div`
 flex: 1;
 font-size: 28px;
 
`;