import React from 'react';

class DisableButton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isDisableButtonChecked:false,
            showMessage:'',
            displayMessage:'',
        }
    }
    handleChange=(e)=>{
        const userInput=e.target.checked;
        let showMessage;
        if(userInput){
            showMessage="I am disabled";
        this.setState({
            isDisableButtonChecked:userInput,
            showMessage:showMessage,
            displayMessage:showMessage,
        })}
        else{
            showMessage="Hi, Iam an enabled";
            const empty=""
            this.setState({
                isDisableButtonChecked:userInput,
                showMessage:showMessage,
                displayMessage:empty,
            })
            
        }
    }
    handleSubmit=()=>{
        this.setState({
            displayMessage:this.state.showMessage,
        })
    }
    
    render(){
        return( 
        <div>
        <lable><input type="checkbox" onClick={this.handleChange} /> Disabled</lable>
        <button onClick={this.handleSubmit} disabled={this.state.isDisableButtonChecked}>Click me</button>
        <p>{this.state.displayMessage}</p>
        </div>)
    }
}

export default DisableButton;