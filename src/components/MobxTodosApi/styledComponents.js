import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Wrapper=styled.div`${tw`flex flex-col items-center justify-center`}`;
const InputTag=styled.input`
border: none;
color: #4d4d4d;
font-size: 24px;
font-weight: lighter;
width:90%;
text-decoration: ${props=>props.isCompleted? 'line-through':'none'}
`;
const Heading=styled.h1`
${tw`text-6xl
text-pink-300`}
`;
const TaskWrapper=styled.div`${tw` w-11/12 flex justify-start items-center`}`
const DeleteButton=styled.button``;
export {Wrapper,InputTag, DeleteButton,Heading,TaskWrapper}