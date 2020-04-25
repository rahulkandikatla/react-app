import React,{ Component } from 'react';
import {AppName,Container,Wrapper,Button,InputTag}from './styledComponents.js';
import stores from '../../stores'
import { observer } from 'mobx-react';

const counterAppStore=stores.counterAppStore;

@observer
class CounterApp extends Component{

handleIncrement=()=>{
   counterAppStore.incrementCount();
}

handleDecrement=()=>{
    counterAppStore.decrementCount();
 }
onChangeCount=(event)=>{
    counterAppStore.count=event.target.value;
}
    render(){
        return <Container>
        <AppName>Counter</AppName>    
        <Wrapper>
        <Button onClick={this.handleDecrement}>-</Button>
        <InputTag type="number" onChange={this.onChangeCount} value={counterAppStore.count}></InputTag>
        <Button onClick={this.handleIncrement}>+</Button>
        </Wrapper>
        </Container>
    }
}

export default CounterApp;