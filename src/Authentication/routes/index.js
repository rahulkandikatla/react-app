import SignInRoute from './SignInPageRoute'
import React from 'react';
import {SignInPagePath} from '../constants';
import {Route} from 'react-router-dom';

export const AuthRoute= <Route key={Math.random().toString()} path={SignInPagePath} component={SignInRoute}/>