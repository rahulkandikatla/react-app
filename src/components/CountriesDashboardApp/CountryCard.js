import React from 'react';
import {Card,Flag,Image,Details,CountryName,Content,Category,Value } from './Styles.js';
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
        <Card onClick={this.navigateToCountryDetailsPage}>
        <Flag >
       <Image src={this.props.countryDetails.flag} alt="Avatar" />
       </Flag>
       <Details >
       <CountryName>{this.props.countryDetails.name}</CountryName>
       <Content><Category>Population:</Category> <Value>{this.props.countryDetails.population}</Value></Content> 
       <Content><Category>Region:</Category> <Value>{this.props.countryDetails.region}</Value></Content> 
       <Content><Category>Capital:</Category> <Value>{this.props.countryDetails.capital}</Value></Content> 
        </Details>
       </Card>
            )
    }
}

export default withRouter(CountryCard);