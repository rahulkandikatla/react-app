import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Greetings from './Greetings.js'
import FavouriteDessert from './FavouriteDessert.js'
import VisitedCities from './VisitedCities.js'
import YourState from './YourState.js'
import DisableButton from './DisableButton.js'
class FormComponents extends React.Component{
    render(){
        return (
    <Router>
      <div>
        <ul>
          <li>
          <Link to="/greetings">Greetings</Link>
          </li>
          <li>
          <Link to="/favouriteDessert">Favorite Dessert</Link>
          </li>
          <li>
          <Link to="/visitedCities">Visited Cities</Link>
          </li>
          <li>
          <Link to="/yourState">Your State</Link>
          </li>
          <li>
          <Link to="/disableButton">Disable Button</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/greetings">
            <Greetings />
          </Route>
          <Route path="/favouriteDessert">
            <FavouriteDessert listOfDesserts={["Vanilla","Butterscotch","Gulab Jamun","Yoghurt Pots","Baked Banana","Chocolate"]}/>
          </Route>
          <Route path="/visitedCities">
            <VisitedCities listOfCities={["Hyderabad","Banglore","Chennai","Mumbai","Delhi","Pondicherry"]} />
          </Route>
          <Route path="/yourState">
            <YourState listOfStates={["Andhra Pradesh","Telangana","Tamil Nadu","Kerala","Karnataka","Haryana"]}/>
          </Route>
          <Route path="/disableButton">
            <DisableButton />
          </Route>
        </Switch>
      </div>
    </Router>
  );
    }
}


export default FormComponents;