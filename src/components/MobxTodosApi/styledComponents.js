import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Wrapper=styled.div``;
const InputTag=styled.input`
text-decoration: ${props=>props.isCompleted? 'line-through':'none'}
`;
const DeleteButton=styled.button``;
export {Wrapper,InputTag, DeleteButton}