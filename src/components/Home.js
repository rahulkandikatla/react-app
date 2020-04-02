import React from 'react';
import {Link} from 'react-router-dom'
export default function Home(){
    return(
        <div>
        <ul>
          <li>
          <Link to="/rgb">RGB App</Link>
          </li>
          <li>
          <Link to="/todo-list">Todo list</Link>
          </li>
          <li>
          <Link to="/cars-fleet">Cars Fleet</Link>
          </li>
          <li>
          <Link to="/form-components">Form Components</Link>
          </li>
          <li>
          <Link to="/countries-dashboard-app">Countries Dashboard App</Link>
          </li>
        </ul>
        </div>
)
}