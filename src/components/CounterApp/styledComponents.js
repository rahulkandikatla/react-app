import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Wrapper=tw.div`
flex 
`;
const Button=tw.button`
h-12 w-12 mx-4 font-bold text-3xl sm:h-16 sm:w-16 bg-blue-700 text-white focus:outline-none rounded
`;
const InputTag=tw.input`
w-40 h-12 sm:h-16 text-3xl border-orange-400 border-2 text-center rounded
`;
const Container=tw.div`
flex  h-screen flex-col justify-center items-center
`;
const AppName=tw.div`
font-bold text-4xl
`;
export {AppName,Container,Wrapper,Button,InputTag}