
import React from 'react';

class CarsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
           carsList:[1]    
        }
        
        
    }
    
    addCarToCarsList=()=>{
        
        const nextCar=this.state.carsList.slice(0);
        nextCar.push(parseInt(this.state.carsList.slice(-1),10)+1);
         //console.log(nextCar)
        this.setState({
            carsList:nextCar,
        })
        
    }
    removeCarFromCarsList=(event)=>{
        const carToRemove=event.target.id;
        if(this.state.carsList.length!=1){
        this.setState({
            carsList:this.state.carsList.filter(each=> each!=carToRemove)
        })
        }
    }
    renderCarsList=()=>{
        
    }
    render(){
        return <div>
        <button className="add-car-button" onClick={this.addCarToCarsList}>Add Car</button>
        <div>{this.state.carsList.map(each=> <Car key={each.toString()} id={each} remove={this.removeCarFromCarsList}/>)}</div>
        </div> 
    }
}


class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
          Status:"STOPPED",
          speed:0,
        }
       // console.log(this.props.id)
    }
    onStartOrStop=()=>{
        if(this.state.Status==="STOPPED"){
            this.setState({
             Status:"RUNNING",   
            })
        }else{
            this.setState({
             Status:"STOPPED",  
             speed:0,
            })
        }
    }
    onApplyBrake=()=>{
        if(this.state.speed!= 0){
        this.setState({
            speed:this.state.speed-=10,
        });
        }
    }
    onAccelerate=()=>{
        console.log(this.state.Status)
        if (this.state.Status==="RUNNING"){
        this.setState({
            speed:this.state.speed+=10,
        });
        }
    }
    displayStatusText=()=>{
       if(this.state.speed !==0) return `Running with ${this.state.speed} kmph`;
       else if(this.state.Status==="RUNNING") return "Running";
       else return "Stopped";
    }
    
    displayStartOrStopButton=()=>{
        if(this.state.Status==="RUNNING") return "Stop";
        return "Start"
    }
    render(){
         return <div className="cars-container">
      <div className="single-car-container">
        <div>Car:{this.props.id} </div>
        <div className="car-operations">
        <div className="start-remove-buttons">
         <button className="key-button" onClick={this.onStartOrStop} >{this.displayStartOrStopButton()}</button>
         <button className="remove-button" onClick={this.props.remove} id={this.props.id}>❌</button>
        </div> 
         <p className="car-status">Status:{this.displayStatusText()}</p>        
         <div className="paddle-container">
           <button className="accelerate-button" onClick={this.onAccelerate}>Accelerate</button>
           <button className="decelerate-button" onClick={this.onApplyBrake}>Decelerate</button>
         </div>
         </div>
      </div>
    </div>
    }
}


// ReactDOM.render(<CarsList />,document.getElementById('root'));
export{Car,CarsList}