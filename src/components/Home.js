import React from 'react';
import {Link} from 'react-router-dom';
import {E_COMMERCE_SIGN_IN_PATH} from '../SignInPage/constants';
import {E_COMMERCE_PRODUCTS_PATH} from '../ProductPage/constants';
import {PRACTICE_ADVANCED_CONCEPTS}from '../constants/RouteConstants';

export default function Home(){
    return(
        <div>
        <ul>
          <li>
          <Link to="/counter-app">Counter App</Link>
          </li>
          <li>
          <Link to="/rgb">RGB App</Link>
          </li>
          <li>
          <Link to="/todo-list">Todo list</Link>
          </li>
          <li>
          <Link to="/mobx-todo-api">MobxTodos API</Link>
          </li>
          <li>
          <Link to="/cars-fleet">Cars Fleet</Link>
          </li>
          <li>
          <Link to="/form-components">Form Components</Link>
          </li>
          <li>
          <Link to="/countries-dashboard-app">Countries DashBoard App</Link>
          </li>
          <li>
          <Link to="/emojis-game">Emojis Game</Link>
          </li>
          <li>
          <Link to={E_COMMERCE_SIGN_IN_PATH}>E-Commerce App</Link>
          </li>
          <li>
          <Link to={E_COMMERCE_PRODUCTS_PATH}></Link>
          </li>
          <li>
          <Link to={PRACTICE_ADVANCED_CONCEPTS}> Practise Advanced Concepts</Link>
          </li>
        </ul>
        </div>
)
}