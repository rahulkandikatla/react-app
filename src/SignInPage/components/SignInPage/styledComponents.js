import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Wrapper=styled.div`
${tw`min-h-screen flex justify-center items-center  bg-gray-200	 `}
`;
const Input=styled.input`
${tw`w-full border border-gray-400 p-2 my-1 rounded-sm`}
`;

const Container=styled.button`
  ${tw`p-8 bg-white w-64 border-gray-900`}
`;
const H2=styled.div`
${tw`font-bold mb-4`}
`;
const SignInButton=styled.input`
${tw`w-full my-2 p-2 bg-gray-900 text-white cursor-pointer`}

`;

export {Wrapper, Input, Container, H2, SignInButton}