
import styled from '@emotion/styled';


const Card=styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border-radius:10px;
transition: 0.3s;
width:220px;
height:400px;
margin:10px;
&:hover {
    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
  }
`;
const Flag=styled.div`
height:200px;
`;
const Details=styled.div`
padding:20px;
`;
const Image=styled.img`
border-top-left-radius:10px;
border-top-right-radius:10px;
width:100%;
height:100%;
object-fit:cover;
`;
const CountryName=styled.h4`
font-size:20px;
font-weight:700;

`;
const Content = styled.div``;
const Category=styled.b``;
const Value=styled.span``;
const H3=styled.h3`
font-size:24px;
font-weight:700;
`;
const Button=styled.button`
display:flex;
align-items:center;
border:none;
`;
const Wrapper=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`;


export {Content,Category,Value, CountryName,Image,Details,Flag,Card,H3, Button,Wrapper};
