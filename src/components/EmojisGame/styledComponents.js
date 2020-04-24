import styled from '@emotion/styled';
import tw from 'tailwind.macro'

const NavWrapper=styled.div`
     ${tw`flex p-2 justify-between`}
     ${props=>{return props.selectedTheme=='Light'? tw`text-black`:tw `text-white`}};
     ${props=>{return props.selectedTheme=='Light'? tw`bg-white`:tw`bg-gray-800`}}
`;
const GameName=tw.div` 
     text-2xl
`;
const Child=tw.div`
     flex
`;
const Image=styled.img`
 ${tw`w-48`} 

`;
const Expression=tw.div`pb-3`;
const Score=tw.div`
font-bold
m-2
`;
const Theme=tw.button`
     border
     p-2
     mx-2
     
`;
const Div=tw.div`

`;
const Wrapper=styled.div`
${tw`w-full min-h-screen  flex flex-col justify-center items-center`}
 ${props=>{return props.selectedTheme==='Light'? tw`bg-indigo-100`:tw`bg-gray-900`}}
`;
const Body=tw.div`
     flex
     flex-wrap
     justify-center
`;
const Card=styled.div`
${tw`flex  flex-col p-2 items-center  w-64  m-4`}
     box-shadow:0 3px 6px #999, 0 3px 6px #999;
 ${props=>{return props.selectedTheme==='Light'? tw`bg-white`:tw`bg-blue-700`}}  
 ${props=>{return props.selectedTheme==='Light'? tw`text-black`:tw `text-white`}}  
   
`;

const FinalScore= styled.div`
${tw`text-4xl font-bold`}
${props=>{return props.selectedTheme==="Light"? tw`text-black`:tw`text-white`}}    
`;
const WonMessage=styled.div`
${tw`text-2xl font-bold text-green-600 p-2`}    

`;
const LoseMessage=styled.div`
    ${tw`text-2xl font-bold text-red-600 p-2`}
   
`;

const PlayAgainButton=styled.button`
${tw`p-2`}
    color:white;
    background-color:blue;
    border:none;
`;
const ResultPageWrapper=styled.div`
${tw`flex flex-col  items-center`}
`;

               

export {Card, ResultPageWrapper,NavWrapper, GameName, PlayAgainButton, LoseMessage,WonMessage, FinalScore, Child, Score, Theme,Image, Expression, Div,Wrapper,Body};








