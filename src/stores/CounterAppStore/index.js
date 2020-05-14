import { observable, action, autorun } from 'mobx';
import React,{Component} from 'react'
import { observer } from "mobx-react";

class CounterAppStore extends Component{
    @observable count=0;
    
    @action.bound
    incrementCount(){

        this.count++;
       
    }
    
    @action.bound
    decrementCount(){ 
        this.count--;
    }
    render(){
        return null
    }
}

export default CounterAppStore;