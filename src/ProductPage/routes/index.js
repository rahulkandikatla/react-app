import {ProductRoute} from './ProductRoute'
import React from 'react';
import {E_COMMERCE_PRODUCTS_PATH} from '../constants';
import {Route} from 'react-router-dom';

export const ProductRoutes= 
<Route 
key={Math.random().toString()} 
path={E_COMMERCE_PRODUCTS_PATH} 
component={ProductRoute}
/>