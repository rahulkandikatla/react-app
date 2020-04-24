import React from 'react';
import {FinalScore, ResultPageWrapper, WonMessage, PlayAgainButton} from '../styledComponents.js';

class WonPage extends React.Component{
    state={}
    render(){
        return (
            <ResultPageWrapper>
                <FinalScore selectedTheme={this.props.selectedTheme}>{this.props.score}</FinalScore>
                <WonMessage>You Won !</WonMessage>
                <PlayAgainButton onClick={this.props.playButtonClick}>Play Again</PlayAgainButton>
            </ResultPageWrapper>
        )
    }
} 


export default WonPage;