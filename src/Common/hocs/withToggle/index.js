import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {action, observable} from 'mobx';

function withToggle(WrappedComponent){
   
    @observer
    class EnhancedComponent extends Component{      
    
    @observable toggleStatus;
    
    constructor(props){
        super(props);
        this.toggleStatus=false;
    }

    @action.bound
    onToggle(){
         
        this.toggleStatus=! this.toggleStatus;
    }
   
    render(){
        const {toggleStatus, onToggle}=this;
       return <WrappedComponent toggleStatus={toggleStatus} onToggle={onToggle}/>
    }
  }
  return EnhancedComponent;
}

export {withToggle}