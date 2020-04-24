// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import HomePage from "./components/HomePage";
// import Page1 from "./components/Page1";

// import "./App.css";

// const App = () => {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <Switch>
//         <Route exact path="/page-1">
//           <Page1 />
//         </Route>
//         <Route path="/">
//           <HomePage />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {Car,CarsList} from './components/CarsFleet/index.js';
// import'./components/CarsFleet/index.css';
// import'./components/TodoList/index.css';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <CarsList />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {Car,CarsList} from './components/CarsFleet/index.js';
import FormComponents from './components/FormComponents/index.js';
import'./components/CarsFleet/index.css';
import'./components/TodoList/index.css';
import {TodoList,OperationsTodoList} from './components/TodoList/index.js'
import CountriesDashboardApp from './components/CountriesDashboardApp/index.js';
import EmojisGame from './components/EmojisGame/index'
import Home from './components/Home.js';
import CountryDetails from './components/CountriesDashboardApp/CountryDetails.js'
 
class App extends React.Component{
  static themeOptions={
            light:{
                id:"0",
                name:"#fff"
            },
            dark:{
                id:"1",
                name:"#2b3945",
            },
        };
  constructor(props){
    super(props);
    this.state={
      selectedTheme:'Light',
    }
  }
  onChangeTheme=()=>{
        if(this.state.selectedTheme==='Light') this.setState({selectedTheme:'Dark'});
        else this.setState({selectedTheme:'Light'});
    
    }
  render(){
  return (
    <Router>
      
        <Switch>
          <Route path="/rgb" children={<Rgb />} />
            
          <Route path="/todo-list" children={<OperationsTodoList />} />
            
          <Route path="/cars-fleet" children={<CarsList />} />
            
          <Route path="/form-components" children={<FormComponents />} />
          
          <Route exact path="/countries-dashboard-app" children={<CountriesDashboardApp onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>} />
          
          <Route path="/countries-dashboard-app/" children={<CountryDetails onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>} />
          
          <Route path='/emojis-game' children={<EmojisGame />} /> 
          <Route path="/" children={<Home />} />
      
        </Switch>
      
    </Router>
  );
}
}


function Rgb(){
  return <a href="https://tap.ibhubs.in/2019/rahul-kandikatla/js-assignments/rgb-app/rgb-app.html">RGB</a>;
}
export default App;
