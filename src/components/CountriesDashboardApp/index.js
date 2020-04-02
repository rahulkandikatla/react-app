/*global fetch*/
import React from'react';
import './index.css';
import CountriesFilterBar from './CountriesFilterBar.js';
import Countries from './Countries.js';
import Header from './Header.js';
import CountryDetails from './CountryDetails.js';
import {withRouter} from 'react-router-dom';

class CountriesDashboardApp extends React.Component{
    
    constructor(props){
        super(props);
    
        this.state={
            totalCountries:[],
            showCountries:[],
            countriesOfRegion:[],
            error:'',
            countryNameInSearchBar:''
        };
        
    }
    componentDidMount=()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(resources=>resources.json())
        .then(json=>
        this.setState({
            totalCountries:json,
            showCountries:json,
            countriesOfRegion:json,
        }))
        
    }
    getCountries=()=>{
        
    }
    filterCountriesByRegion=(region,country)=>{
        const filteredCountriesByRegion=this.state.totalCountries.filter(each=>each.region==region);
        this.setState({
            countriesOfRegion:filteredCountriesByRegion,
            showCountries:filteredCountriesByRegion,
        });
        if(region=='All'){
          this.setState({
              countriesOfRegion:this.state.totalCountries,
            showCountries:this.state.totalCountries,
        }); 
        }
     setTimeout(()=>this.filterCountriesByName(country))
    }
    filterCountriesByName=(countryName)=>{
        countryName=countryName.toLowerCase();
        const filteredCountriesByName=this.state.countriesOfRegion.filter(each=>((each.name).toLowerCase().includes(countryName)||(each.alpha3Code).toLowerCase().includes(countryName)));
        if(filteredCountriesByName.length>0){
        this.setState({
            showCountries:filteredCountriesByName,
            error:'',
            countryNameInSearchBar:countryName,
        })}
        else{
            const errorMessage=`No Country found named '${countryName}', in this region.`;
            this.setState({
                showCountries:filteredCountriesByName,
                error:errorMessage,
                countryNameInSearchBar:countryName,
            });
        }
        
        
    }
    
    render(){
        
        return (
        <div className={`main-container ${this.props.selectedTheme.toLowerCase()}`}>
        <div className={`flags-container `}>
        <Header 
        className={this.props.selectedTheme.toLowerCase()}
        onChangeTheme={this.props.onChangeTheme}
        selectedTheme={this.props.selectedTheme}
        />
        <CountriesFilterBar
        className={this.props.selectedTheme.toLowerCase()}
        countryNameInSearchBar={this.state.countryNameInSearchBar}
        filterCountriesByName={this.filterCountriesByName}
        filterCountriesByRegion={this.filterCountriesByRegion}/>
        <Countries showCountryDetails={this.showCountryDetails} countries={this.state.showCountries} />
        <div className="error-message">{this.state.error}</div>
        </div>
        </div>);
    }
}

export default withRouter(CountriesDashboardApp);
