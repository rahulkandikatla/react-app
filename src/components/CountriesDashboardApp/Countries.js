import React from 'react';
import CountryCard from './CountryCard.js';

class Countries extends React.Component {
        constructor(props) {
            super(props);
        }
        renderCountries = () => {

        }
        render() {
                return ( <div className = "countries-list" > {this.props.countries.map(each => < CountryCard showCountryDetails = { this.props.showCountryDetails }countryDetails = { each }/>)} 
                        </div>)
        }
}

                        export default Countries