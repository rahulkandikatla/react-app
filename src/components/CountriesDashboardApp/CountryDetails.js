/*global fetch*/

import React from 'react';
import { withRouter } from "react-router-dom";
import Header from './Header.js';
import CountriesDashboardApp from '../CountriesDashboardApp';
import { IoMdArrowBack } from "react-icons/io";


class CountryDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allCountries:[],
            countryDetails:{flag:'hi',currencies:[{}],languages:[1,2],borders:[]}
        }
    }
    componentDidMount=()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(resources=>resources.json())
        .then(json=>{
        const countryObject=json.filter(each=>each.alpha3Code===this.props.history.location.pathname.slice(-3,));
        this.setState({
            countryDetails:countryObject[0],
            allCountries:json,
        })})
        
        
    }
    navigate=(e)=>{
        
    }
    navigateBack=()=>{
        this.props.history.goBack();
    }
    
    render(){
        let languages=this.state.countryDetails.languages.map(each=>each.name);
        languages=languages.join(',');
        
        let borders=this.state.countryDetails.borders.map(each=>{return(this.state.allCountries.filter(every=>every.alpha3Code==each))})
        borders=borders.map(each=>each[0])
        borders=borders.map(each=>each.name)
        
        return(
            <div className={`country-details-container ${this.props.selectedTheme.toLowerCase()} `}>
            <Header 
        className={this.props.selectedTheme.toLowerCase()}
        onChangeTheme={this.props.onChangeTheme}
        selectedTheme={this.props.selectedTheme}
        />
            <button onClick={this.navigateBack} className={`back-button ${this.props.selectedTheme.toLowerCase()}`}>{<IoMdArrowBack />} Back</button>
            <div className="country-details-full">
            <img src={this.state.countryDetails.flag} alt="flag" />
            <div>
            <h3>{this.state.countryDetails.name}</h3>
            <div className="details">
            <div>
            <div><b>Native Name:</b> {this.state.countryDetails.nativeName}</div>
            <div><b>Population:</b> {this.state.countryDetails.population}</div>
            <div><b>Region:</b> {this.state.countryDetails.region}</div>
            <div><b>Sub Region:</b> {this.state.countryDetails.subregion}</div>
            <div><b>Capital:</b> {this.state.countryDetails.capital}</div>
            </div>
            <div>
            <div><b>Top Level Domain:</b> {this.state.countryDetails.topLevelDomain}</div>
            <div><b>Currencies:</b> {this.state.countryDetails.currencies[0].name}</div>
            <div><b>Languages:</b> {languages}</div>
            </div>
            </div>
            <div className="border-countries"><b>Border Countries:<br /></b> {borders.map(each=><button className={`border-country-buttons ${this.props.selectedTheme.toLowerCase()}`} onClick={this.navigate}>{each}</button>)}</div>
            </div>
            </div>
            </div>
           )
    }
}
export default withRouter(CountryDetails);

