import React,{Component} from 'react';
import {withScreenSizeDetectors} from '../../hocs/withScreenSizeDetectors';
import {Wrapper,Heading,Device,Paragraph} from './styledComponents'

class DeviceTypeText extends Component{
    render(){
        
        
        return <Wrapper>
         <Heading>DeviceTypeText</Heading>
         <Paragraph>Device Type: <Device>{this.props.device}</Device></Paragraph>
        </Wrapper>
    }
}

export default withScreenSizeDetectors(DeviceTypeText)