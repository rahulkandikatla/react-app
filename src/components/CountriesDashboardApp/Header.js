import React from 'react';
import {H3, Button,Wrapper} from './Styles.js';
import { FiMoon } from 'react-icons/fi';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';




class Header extends React.Component{
    render(){
        return(
            <Wrapper>
            <H3>Where in the world ?</H3>
            <Button onClick={this.props.onChangeTheme}><FiMoon /> {this.props.selectedTheme} Mode</Button>
            </Wrapper>)
    }
}

export default Header;