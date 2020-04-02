import React from 'react';
import SearchCountry from './SearchCountry.js';
import SelectRegion from './SelectRegion.js';

class CountriesFilterBar extends React.Component{
    render(){
        return(
            <div className="search-filters">
            <SearchCountry className={this.props.className} filterCountriesByName={this.props.filterCountriesByName}/>
            <SelectRegion  className={this.props.className} countryNameInSearchBar={this.props.countryNameInSearchBar} filterCountriesByRegion={this.props.filterCountriesByRegion}/>
            </div>)
    }
}

export default CountriesFilterBar