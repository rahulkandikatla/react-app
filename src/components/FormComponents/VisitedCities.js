import React from 'react';

class VisitedCities extends React.Component{
    constructor(props){
        super(props);
        this.state={
            citiesObjects:this.props.listOfCities.map(each=>{ return{
                isChecked:false,
                cityName:each,                               
            }}),
            displayMessage:'',
        };
    }
    handleUserInput=(e)=>{
        
        const tempList=this.state.citiesObjects;
        tempList[e.target.id].isChecked=!(tempList[e.target.id].isChecked);
        this.setState({
            citiesObjects:tempList,
            displayMessage:'',
        })        
    }
    handleSubmit=(e)=>{
        const listOfSelectedObjects=this.state.citiesObjects.filter((each)=>{ if(each.isChecked){ return each.cityName}return false;})
        const listOfSelectedNames=listOfSelectedObjects.map(each=>each.cityName);
        const message=`I have visited these cities ${listOfSelectedNames.join(',')}.`
        this.setState({displayMessage:message})
        e.preventDefault();
    }
    
    render(){
        return(
        <form>
        <div>Which of the following cities you have Visited?</div>
        {this.props.listOfCities.map((each,index)=><div key={index}><lable><input id={index}type="checkbox" value={each} onClick={this.handleUserInput}/> {each}</lable><br /></div>)}
        <button onClick={this.handleSubmit}>Make your choice</button>
        <p>{this.state.displayMessage}</p>
        </form>
        );
    }
}

export default VisitedCities ;