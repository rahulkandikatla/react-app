import React from 'react';
import { useHistory } from "react-router";
import {withRouter, Link,BrowserRouter as Router} from 'react-router-dom';


class CountryCard extends React.Component{
    constructor(props){
        super(props);
    }
    navigateToCountryDetailsPage=()=>{
    this.props.history.push(`/countries-dashboard-app/${this.props.countryDetails.alpha3Code}`)
  }
        
    
    render(){
         
        return(
        <div className="country-card" onClick={this.navigateToCountryDetailsPage}>
        <div className="flag-container-in-card">
       <img src={this.props.countryDetails.flag} alt="Avatar" />
       </div>
       <div className="country-details">
       <h4>{this.props.countryDetails.name}</h4>
       <div><b>Population:</b> <span>{this.props.countryDetails.population}</span></div> 
       <div><b>Region:</b> <span>{this.props.countryDetails.region}</span></div> 
       <div><b>Capital:</b> <span>{this.props.countryDetails.capital}</span></div> 
        </div>
       </div>
            )
    }
}

export default withRouter(CountryCard);