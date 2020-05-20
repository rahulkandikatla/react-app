import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {action,observable} from 'mobx';
import {Wrapper} from './styledComponents'

@observer
class MouseCoordinates extends React.Component {
    @observable xCoordinates=0;
    @observable yCoordinates=0;

  @action.bound
    handleMouseMove(event) {
      this.xCoordinates=event.clientX;
      this.yCoordinates=event.clientY;
    }
  
    render() {
        const {xCoordinates,yCoordinates}=this;
      return (
        <Wrapper onMouseMove={this.handleMouseMove}>
          {this.props.render(xCoordinates,yCoordinates)}
        </Wrapper>
      );
    }
  }
  export {MouseCoordinates}
  