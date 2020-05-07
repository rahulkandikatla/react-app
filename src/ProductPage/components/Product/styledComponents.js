import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Wrapper=styled.div`
${tw`flex flex-col justify-center items-center w-56 m-4`}
`;
const Image=styled.img`
${tw`w-40`}
`;
const Title=styled.p`
${tw`m-1 text-sm`}
`;
const Button=styled.button`
${tw`p-2 m-2 bg-black text-white w-full rounded`}
`;
const Cost=styled.div`
${tw`text-lg`}
`;
const Installment=styled.div`
${tw`text-gray-700 text-sm`}
`;
const Span=styled.span`
${tw`text-xs`}
`;
const FreeShipping=styled.span`
${tw`text-xs bg-black text-white -m-5 z-0 self-end p-1`}
display: ${props =>
    props.freeShipping ? 'flex' : 'none'};
`;


export {Wrapper, Image, Title, Button, Cost, Installment, Span, FreeShipping}