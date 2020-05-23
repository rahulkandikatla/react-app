import styled from "@emotion/styled";
import tw from 'tailwind.macro';


const Wrapper=styled.div`
${tw`flex`}
`;
const PageButtons=styled.button`
${tw`p-2`}
background-color:${props=>props.disabled? 'gray':'black'}
`;
const PagePosition=styled.div`
${tw`p-2`}
`;


export {Wrapper,PageButtons,PagePosition}