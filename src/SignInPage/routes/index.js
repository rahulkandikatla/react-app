import {SignInRoute} from './SignInRoute'
import React from 'react';
import {E_COMMERCE_SIGN_IN_PATH} from '../constants';
import {Route} from 'react-router-dom';

export const AuthRoute= <Route key={Math.random().toString()} path={E_COMMERCE_SIGN_IN_PATH} component={SignInRoute}/>