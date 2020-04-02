import React from 'react';

class SearchCountry extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchText:'',
        }
    }
    onChangeSearchText=(e)=>{
        const name=e.target.value;
        this.props.filterCountriesByName(name)
    }
    onSubmitSearchText=(e)=>{
        
        e.preventDefault()
    }
    render(){
        return(
        <form onChange={this.onChangeSearchText} onSubmit={this.onSubmitSearchText}>
        <input className={`search-bar ${this.props.className}`} type="text" placeholder="search for a country.."/>
        </form>)
    }
}

export default SearchCountry;