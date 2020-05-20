import React,{Component} from 'react';
import {withToggle} from '../../hocs/withToggle';
import {observer} from 'mobx-react';
import {observable,action} from 'mobx'
import {Wrapper,Heading,Div,Button,Paragraph,Input} from './styledComponents'

@observer
class ViewEditToggle extends Component{
    @observable content='Click on the edit button to start editing';

    @action.bound
    onChangeHandler({target:{value}}){
        this.content= value;
    }

    render(){
        const {toggleStatus,onToggle}=this.props;
        const {content,onChangeHandler}=this;
        return <Wrapper>
         <Heading>ViewEditToggle</Heading>
         <Div>
         {
         (toggleStatus)? <Input type='text' value={content} onChange={onChangeHandler}/>:<Paragraph>{content}</Paragraph>
         }
         <Button onClick={onToggle}> {
         (toggleStatus)? 'Cancel':'Edit'}</Button>
         </Div>
        </Wrapper>
    }
}

export default withToggle(ViewEditToggle)