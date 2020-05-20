import {PracticeAdvancedConceptsRoute} from './PracticeAdvancedConceptsRoute'
import React from 'react';
import {PRACTICE_ADVANCED_CONCEPTS} from '../../constants/RouteConstants';
import {Route} from 'react-router-dom';

export const PracticeAdvancedConceptsRoutes=
<Route 
key={PRACTICE_ADVANCED_CONCEPTS} 
exact path={PRACTICE_ADVANCED_CONCEPTS} 
component={PracticeAdvancedConceptsRoute}
/>