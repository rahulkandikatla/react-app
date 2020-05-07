import React from 'react';
import { getAccessToken } from "../SignInPage/utils/StorageUtils";
import { Route, Redirect } from "react-router-dom";
import {E_COMMERCE_SIGN_IN_PATH} from '../SignInPage/constants'

export const ProtectedRoute = (props) => {
    const { component:Component,...others}=props;
    return (getAccessToken())?<Route component={Component} {...others}/>:<Redirect to={E_COMMERCE_SIGN_IN_PATH}/>
}