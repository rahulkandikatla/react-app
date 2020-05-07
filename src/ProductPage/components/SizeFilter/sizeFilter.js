import React,{Component} from 'react';
import {Wrapper, Heading, SizeButton, SizeButtonContainer} from './styledComponents'

class SizeFilter extends Component{
    render(){
        const sizesArray=['XS','S','M','L','XL','XXL']
        return <Wrapper>
          <Heading>Sizes:</Heading>
          <SizeButtonContainer>
          {sizesArray.map(eachSize=><SizeButton>{eachSize}</SizeButton>)}
          </SizeButtonContainer>
        </Wrapper>
    }
}

export {SizeFilter}