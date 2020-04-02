import React from 'react';

class FavouriteDessert extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectedDessert:'',
            favoriteDessert:'',
        }
    }
     handleUserInput=(e)=>{
        const userInput=e.target.value.toUpperCase();
        
        const emptyName="";
        this.setState({
            selectedDessert:userInput,
            favoriteDessert:emptyName,
        })
    }
    handleSubmit=(e)=>{
        const submitDessert=`My favourite dessert is ${this.state.selectedDessert}`;
        this.setState({
            favoriteDessert:submitDessert
        })
        e.preventDefault()
    }
    
    render(){
        return( 
        <div>
        <div>Select your Favourite Dessert</div>
        {this.props.listOfDesserts.map(each=>
        {return (
        <div>
        <lable> 
        <input onClick={this.handleUserInput} name="desserts" type="radio" value={each}/>
        {each}
        </lable><br />
        </div>)})}
        <button onClick={this.handleSubmit}>Make your choice</button>
        <p>{this.state.favoriteDessert}</p>
        </div>)
    }
}

export default FavouriteDessert;