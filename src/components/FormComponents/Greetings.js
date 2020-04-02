import React from 'react';

class Greetings extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInputText:'',
            displayName:''
        }
    }

    handleUserInput=(e)=>{
        const userInput=e.target.value;
        const emptyName="";
        this.setState({
            userInputText:userInput,
            displayName:emptyName,
        })
    }
    handleSubmit=(e)=>{
         const submitName=`Hello ${this.state.userInputText}, Have a nice day!`;
        if(this.state.userInputText.length!==0){
        this.setState({
            displayName:submitName
        })}
        e.preventDefault()
    }
    
    render(){
        return( 
        <form onSubmit={this.handleSubmit}>
        <input type="text"  onChange={this.handleUserInput}value={this.state.userInputText} placeHolder="Enter Name" />
        <input type="submit" onClick={this.handleSubmit} value="Greet"/>
        <p>{this.state.displayName}</p>
        </form>
        )
    }
}

export default Greetings;