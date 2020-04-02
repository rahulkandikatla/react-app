import React from 'react';


class YourState extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedState:'',
            submittedState:'',
        }
    }
    handleChangeState=(e)=>{
        const userInput=e.target.value;
        this.setState({
            selectedState:userInput,
        })
        
    }
    handleSubmit=(e)=>{
        const submitName=`I am from "${this.state.selectedState}", state`;
        this.setState({
            submittedState:submitName,
        })
        e.preventDefault();
    }
    render(){
        return( 
        <form>
        <select onChange={this.handleChangeState} value={this.state.selectedState}>
        {this.props.listOfStates.map(each=><option value={each}>{each}</option>)}
        </select>
        <button onClick={this.handleSubmit} >Submit</button>
        <p>{this.state.submittedState}</p>
        </form>)
    }
}

export default YourState;