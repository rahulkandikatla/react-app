import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {action,observable} from 'mobx';


function withScreenSizeDetectors(WrappedComponent){
    @observer
    class EnhancedComponent extends Component{
       @observable device;
       @observable windowWidth=window.innerWidth;
    componentDidMount(){
        const {deviceType}=this;
        deviceType()
        window.addEventListener('resize',deviceType)
    }
   
    @action.bound
    deviceType(){
        this.windowWidth=window.innerWidth;
        
         const {isMobile,isTablet,isDesktop}=this;
        this.device=(isMobile())? 'Mobile':(isTablet())? 'Tablet':'Desktop';
    }
    
    isMobile=()=>{
        const {windowWidth}=this;
        
        if(windowWidth < 576) return true;
        else return false;
    }
    
    
    isTablet=()=>{
        const {windowWidth}=this;
        if(windowWidth >= 576 && windowWidth < 992) return true;
        else return false;
    }

    
    isDesktop=()=>{
        const {windowWidth}=this;
        if(windowWidth >= 992 ) return true;
        else return false;
    }
    render(){
        const {device}=this;
       return <WrappedComponent device={device}/>
    }
  }
  return EnhancedComponent;
}

export {withScreenSizeDetectors}