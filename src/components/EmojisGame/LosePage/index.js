import React from 'react';
import {FinalScore, ResultPageWrapper, LoseMessage, PlayAgainButton} from '../styledComponents.js';

class LosePage extends React.Component{
    state={}
    render(){
        return (
            <ResultPageWrapper>
                <FinalScore selectedTheme={this.props.selectedTheme}>{this.props.score}</FinalScore>
                <LoseMessage>You Lose !</LoseMessage>
                <PlayAgainButton onClick={this.props.playButtonClick}>Play Again</PlayAgainButton>
            </ResultPageWrapper>
        )
    }
} 


export default LosePage;