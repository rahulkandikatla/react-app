import React from 'react';
import {Card, Image, Expression} from '../styledComponents.js';


class EmojiCard extends React.Component{
    handleClick=()=>{
        const {click,object} =this.props;
        click(object)
    }
    render(){
        
      
        return (
            <Card onClick={this.handleClick} selectedTheme={this.props.selectedTheme}>
                <Image src={this.props.object.image}/>
                <Expression>{this.props.object.name}</Expression>
            </Card>
        )
    }
}

export default EmojiCard;