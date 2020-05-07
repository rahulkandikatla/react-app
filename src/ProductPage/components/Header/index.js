import React,{Component} from 'react';
import {Wrapper, SignOutButton, CartButton, CartIcon} from './styledComponents'

class Header extends Component{
   render(){
       const {products,onClickAddToCart}=this.props;
       return <Wrapper>
           <SignOutButton>Sign Out</SignOutButton>
           <CartButton>
           <CartIcon>
                    <svg xmlns='http://w3.org/2000/svg' className='bg-gray-800 p-1'  width='50' height='50'
                            viewBox="0 0 24 24" fill='none' stroke='white' strokeWidth='2'
                                strokeLinecap='round' strokeLinejoin='round'>
                                <circle cx='9' cy='21' r='1'></circle>
                                <circle cx='20' cy='21' r='1'></circle>
                                <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6h6'></path>
                    </svg>
           </CartIcon>
           </CartButton>
       </Wrapper>
   }
}

export {Header}