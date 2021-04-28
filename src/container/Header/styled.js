import styled from 'styled-components';


export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#6fb1f2;
    padding: 20px;
`;

export const UserBlock = styled.div `
    display: flex;
    flex-wrap: wrap;
`;

export const Input = styled.input `
    width: 200px;
    padding: 10px; 
`;



export const CreatePost = styled.button ` 

   background: #355993;
   background-image: -webkit-linear-gradient(top, #355993, #112032);
   background-image: -moz-linear-gradient(top, #355993, #112032);
   background-image: -ms-linear-gradient(top, #355993, #112032);
   background-image: -o-linear-gradient(top, #355993, #112032);
   background-image: -webkit-gradient(to bottom, #355993, #112032);
   -webkit-border-radius: 20px;
   -moz-border-radius: 20px;
   border-radius: 20px;
   color: #FFFFFF;
   font-family: Brush Script MT;
   font-size: 25px;
   font-weight: 100;
   padding: 10px 0;
   margin: 0 10px;
   -webkit-box-shadow: 1px 1px 20px 0 #000000;
   -moz-box-shadow: 1px 1px 20px 0 #000000;
   box-shadow: 1px 1px 20px 0 #000000;
   text-shadow: 1px 1px 20px #000000;
   border: solid #337FED 1px;
   text-decoration: none;
   display: inline-block;
   cursor: pointer;
   width: 150px;
   text-align: center;
&:hover {
   border: solid #337FED 1px;
   background: #1E62D0;
   background-image: -webkit-linear-gradient(top, #1E62D0, #3D94F6);
   background-image: -moz-linear-gradient(top, #1E62D0, #3D94F6);
   background-image: -ms-linear-gradient(top, #1E62D0, #3D94F6);
   background-image: -o-linear-gradient(top, #1E62D0, #3D94F6);
   background-image: -webkit-gradient(to bottom, #1E62D0, #3D94F6);
   -webkit-border-radius: 20px;
   -moz-border-radius: 20px;
   border-radius: 20px;
   text-decoration: none;
}
`;

