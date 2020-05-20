import styled from "@emotion/styled";
import tw from 'tailwind.macro';

const Wrapper=styled.div`
${tw `py-4 flex flex-col items-center bg-gray-300 w-full`}
`;
const Heading=styled.div`
${tw `text-xl font-bold`}
`;
const Div=styled.div`
${tw `flex`}
`;
const Button=styled.button`
${tw `ml-2 px-2 py-1 bg-blue-500 rounded text-white focus:outline-none`}
`;
const Paragraph=styled.p`
${tw ``}
`;
const Device=styled.span`
${tw ``}
`;
export {Wrapper,Heading,Div,Device,Paragraph}