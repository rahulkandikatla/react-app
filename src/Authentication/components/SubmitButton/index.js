import React from 'react';
import {Submit} from './styledComponents'


function SubmitButton(props){

    return (<Submit onClick={props.onClick}style={props.style}>{props.children}
        </Submit>)
}

export {SubmitButton}