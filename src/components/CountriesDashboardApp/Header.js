import React from 'react';
import { FiMoon } from 'react-icons/fi';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
            <h3>Where in the world ?</h3>
            <button className={`theme-button ${this.props.className}`} onClick={this.props.onChangeTheme}><FiMoon /> {this.props.selectedTheme} Mode</button>
            </div>)
    }
}

export default Header;