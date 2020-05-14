import React,{Component} from 'react';
import {Wrapper, Heading, SizeButton, SizeButtonContainer} from './styledComponents'
import { inject, observer } from "mobx-react";


@inject('productStore')
@observer
class SizeFilter extends Component{
    render(){
        const sizesArray=['XS','S','M','L','XL','XXL']
        const {onSelectSize}=this.props.productStore;
        return <Wrapper>
          <Heading>Sizes:</Heading>
          <SizeButtonContainer>
          {sizesArray.map(eachSize=><SizeButton onClick={onSelectSize} value={eachSize} key={Math.random().toString()}>{eachSize}</SizeButton>)}
          </SizeButtonContainer>
        </Wrapper>
    }
}
export {SizeFilter}
