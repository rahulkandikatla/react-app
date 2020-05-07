import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Wrapper=styled.div`
${tw`flex flex-wrap flex-col w-1/5 inline-block`}
`;
const Heading=styled.h3`
${tw`text-lg font-semibold`}
`;
const SizeButtonContainer=styled.div`
${tw`flex flex-wrap w-full`}
`;
const SizeButton=styled.button`
${tw`rounded-full m-2 h-8 w-8 flex items-center justify-center bg-gray-500`}
`;

export {Wrapper, Heading, SizeButton, SizeButtonContainer}