import React from 'react';

class SelectRegion extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedRegion:"all",
        }
    }
    onChangeSelectedRegion=(e)=>{
        const region=e.target.value;
        
        this.setState({
            selectedRegion:region,
        })
        console.log(this.props.countryNameInSearchBar)
        this.props.filterCountriesByRegion(region,this.props.countryNameInSearchBar)
        
    }
    
    render(){
        return(
            <div>
            <select className={`search-region ${this.props.className}`} onChange={this.onChangeSelectedRegion} >
            <option value={"All"}>All</option>
            <option value={"Africa"}>Africa</option>
            <option value={"Americas"}>Americas</option>
            <option value={"Asia"}>Asia</option>
            <option value={"Europe"}>Europe</option>
            <option value={"Oceania"}>Oceania</option>
            </select>
            </div>)
    }
}

export default SelectRegion