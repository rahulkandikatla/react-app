import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Wrapper=styled.div`
${tw`flex justify-between`}
`;
const SignOutButton=styled.button`
${tw`p-1 border-gray-500 border`}
`;
const CartButton=styled.button``;
const CartIcon=styled.div``;

export {Wrapper,SignOutButton, CartButton, CartIcon}
