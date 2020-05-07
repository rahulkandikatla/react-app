import React,{Component} from 'react';
import {Wrapper, Image, Title, Button, Cost, Installment, Span, FreeShipping} from './styledComponents'
import { IoIosArrowRoundBack } from "react-icons/io";

class Product extends Component{
   render(){
       const {availableSizes,
       currencyFormat,
       currencyId,
       description,
       imageURL,
       installmentsCount,
       isFreeShipping,
       price,
       printStyle,
       productId,
       title}=this.props.details;
       return(<Wrapper>
           <FreeShipping freeShipping={isFreeShipping}>Free Shipping</FreeShipping>
           <Image src={imageURL} alt='image' />
           <Title>{title}</Title>
       <Cost><Span>{currencyFormat}</Span> {price}</Cost>
       <Installment>or {installmentsCount} x {currencyFormat} {(price/installmentsCount).toFixed(2)}</Installment>
           <Button>Add to cart</Button>
       </Wrapper>)
   }
}

export {Product}