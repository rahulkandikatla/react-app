import React,{Component} from 'react';
import {withToggle} from '../../hocs/withToggle';
import {Wrapper,Heading,Div,Button,Paragraph,List} from './styledComponents'

class CollapseExpand extends Component{
    render(){
        const {toggleStatus,onToggle}=this.props;
        
        return <Wrapper>
         <Heading>CollapseExpand</Heading>
         <Div>
         <Paragraph>Sample Shopping List:</Paragraph>
         <List>
         <Button onClick={onToggle}> {
         (toggleStatus)? 'Collapse':'Expand'}</Button>
         {(toggleStatus)? <Paragraph>Eggs<br/>Bread</Paragraph>:''}
         </List>
         </Div>
        </Wrapper>
    }
}

export default withToggle(CollapseExpand);