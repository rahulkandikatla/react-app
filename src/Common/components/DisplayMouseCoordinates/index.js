import React,{Component} from 'react';
import {MouseCoordinates} from '../MouseCoordinates'
import {Wrapper,Paragraph,Heading} from './styledComponents'

class DisplayMouseCoordinates extends Component{
    render(){
        return <MouseCoordinates render={(x,y)=><Wrapper>
            <Heading>DisplayMouseCoordinates</Heading>
            <Paragraph>The mouse position is ({x}, {y}) </Paragraph>
           </Wrapper>}/> 
    }
}

export {DisplayMouseCoordinates}


