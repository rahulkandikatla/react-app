/*global fetch*/

import React from 'react';
import { withRouter } from "react-router-dom";
import Header from './Header.js';
import CountriesDashboardApp from '../CountriesDashboardApp';
import { IoMdArrowBack } from "react-icons/io";
import { Category , Content, Value, H3} from './Styles.js';
import styled from '@emotion/styled';

const ButtonWithShadow = styled.button `
    vertical-align: center;
    border:none;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding:10px;
    background-color:${props=>props.light? 'white':'#2b3945'};
    color:${props=>props.light? 'black':'white'};
`;
const FullImage = styled.img `
     margin:20px;
     width:400px;
     height:400px;
`;
const Container = styled.div `
align-items:center;
display:flex;
justify-content:space-between;
`;
const WrapperRow = styled.div ``;

const CountryDetailsWrapper=styled.div`
padding: 20px;
background-color:${props=>props.theme==='light'? 'white':'#2b3945'};
`;
const DetailsContainer =styled.div`
display: flex;
justify-content: space-evenly;
`;
const WrapperColumn=styled.div``;
const Break = styled.br``;
class CountryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCountries: [],
            countryDetails: { flag: 'hi', currencies: [{}], languages: [1, 2], borders: [] }
        }
    }
    componentDidMount = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(resources => resources.json())
            .then(json => {
                const countryObject = json.filter(each => each.alpha3Code === this.props.history.location.pathname.slice(-3, ));
                this.setState({
                    countryDetails: countryObject[0],
                    allCountries: json,
                })
            })


    }
    navigate = (e) => {

    }
    navigateBack = () => {
        this.props.history.goBack();
    }

    render() {
        let languages = this.state.countryDetails.languages.map(each => each.name);
        languages = languages.join(',');

        let borders = this.state.countryDetails.borders.map(each => { return (this.state.allCountries.filter(every => every.alpha3Code == each)) })
        borders = borders.map(each => each[0])
        borders = borders.map(each => each.name)

        return ( 
        
        <CountryDetailsWrapper theme={this.props.selectedTheme.toLowerCase()} >
            <Header className = { this.props.selectedTheme.toLowerCase() }
            onChangeTheme = { this.props.onChangeTheme }
            selectedTheme = { this.props.selectedTheme }
            />  
            <ButtonWithShadow onClick = { this.navigateBack }this = { this.props.selectedTheme.toLowerCase() } > { < IoMdArrowBack /> }Back </ButtonWithShadow>  
            <Container className = "country-details-full" >
            <FullImage src = { this.state.countryDetails.flag }alt = "flag" />
            <WrapperRow>
            <H3 > { this.state.countryDetails.name } </H3>  
            <DetailsContainer>
            <WrapperColumn>
            <Content> <Category> Native Name: </Category> <Value>{this.state.countryDetails.nativeName}</Value > </Content> 
            <Content> <Category> Population: </Category> <Value>{this.state.countryDetails.population}</Value > </Content>
            <Content> <Category> Region: </Category> <Value>{this.state.countryDetails.region}</Value > </Content>
            <Content> <Category> Sub Region: </Category> <Value>{this.state.countryDetails.subregion}</Value > </Content> 
            <Content> <Category> Capital: </Category> <Value>{this.state.countryDetails.capital}</Value > </Content> <WrapperColumn> </WrapperColumn >
            <Content> <Category> Top Level Domain: </Category> {this.state.countryDetails.topLevelDomain}</Content >
            <Content> <Category> Currencies: </Category> {this.state.countryDetails.currencies[0].name}</Content >
            <Content> <Category> Languages: </Category> {languages}</Content>
            </WrapperColumn> 
            </DetailsContainer > 
            <div className = "border-countries" > <Category > Border Countries: <Break /> </Category> {borders.map(each=><ButtonWithShadow className={`border-country-buttons ${this.props.selectedTheme.toLowerCase()}`} onClick={this.navigate}>{each}</ButtonWithShadow > )} </div> 
            </WrapperRow > 
            </Container> 
    </CountryDetailsWrapper >
)
}
}
export default withRouter(CountryDetails);