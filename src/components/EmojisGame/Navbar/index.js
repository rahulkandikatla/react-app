import React from 'react';
import {NavWrapper, GameName, Child, Score, Theme} from '../styledComponents.js';

class Navbar extends React.Component{
  
    render(){
        return (
            <NavWrapper selectedTheme={this.props.selectedTheme}>
                <Child>
                  <GameName>Emoji Game</GameName>
                </Child>
                <Child>
        <Score>Score: {this.props.score}</Score>
        <Score>Top Score: {this.props.topScore}</Score>
                  <Theme onClick={this.props.onChangeTheme}>{this.props.selectedTheme} Theme</Theme>
                </Child>
            </NavWrapper>
        )
    }
}

export default Navbar;