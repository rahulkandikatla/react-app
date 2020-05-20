import React,{Component} from 'react';
import CollapseExpand from '../../components/CollapseExpand';
import DeviceTypeText from '../../components/DeviceTypeText';
import {DisplayMouseCoordinates} from '../../components/DisplayMouseCoordinates';
import ViewEditToggle from '../../components/ViewEditToggle';
import {Wrapper, Heading} from './styledComponents'

class PracticeAdvancedConceptsRoute extends Component{
     render(){
         return <Wrapper>
           <Heading>HOC's Usage</Heading>  
          <ViewEditToggle />
          <CollapseExpand />
          <DeviceTypeText />
           <Heading>Render Props Usage</Heading>  
          <DisplayMouseCoordinates />
          
         </Wrapper>
     }
}

export {PracticeAdvancedConceptsRoute}