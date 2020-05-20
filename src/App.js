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
//import CounterPage from './components/CounterPage/index.js';
import'./components/CarsFleet/index.css';
import'./components/TodoList/index.css';
import {TodoList,OperationsTodoList} from './components/TodoList/index.js'
import CountriesDashboardApp from './components/CountriesDashboardApp/index.js';
import EmojisGame from './components/EmojisGame/index'
import Home from './components/Home.js';
import CountryDetails from './components/CountriesDashboardApp/CountryDetails.js'
import CounterApp from'./components/CounterApp';
import {observer, Provider} from 'mobx-react';
import themeStore from './ThemeStore/index.js';
import LoadingPage from './components/MobxTodosApi/LoadingPage.js';
import stores from './stores/index';
import {AuthRoute} from './SignInPage/routes/';
import {ProductRoutes} from './ProductPage/routes/'
import {PracticeAdvancedConceptsRoutes}from './Common/routes';


@observer 
class App extends React.Component{
   
  getCurrentTheme=()=>{
    return themeStore.selectedTheme;
  }
  setCurrentTheme=(theme)=>{
    themeStore.setCurrentTheme(theme);
  }
  
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
        if(this.getCurrentTheme()==='light') this.setCurrentTheme('dark');
        else this.setCurrentTheme('light');
    
    }
  render(){
  return (
    <Provider {...stores}>
     <Router>
      
        <Switch>

          <Route path="/counter-app" children={<CounterApp />}/>
        
          <Route path="/rgb" children={<Rgb />} />
            
          <Route path="/todo-list" children={<OperationsTodoList />} />
          
          <Route path="/mobx-todo-api" children={<LoadingPage />} />  

          <Route path="/cars-fleet" children={<CarsList />} />
            
          <Route path="/form-components" children={<FormComponents />} />
          
          <Route exact path="/countries-dashboard-app" children={<CountriesDashboardApp onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>} />
          
          <Route path="/countries-dashboard-app/" children={<CountryDetails onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>} />
          
          <Route path='/emojis-game' children={<EmojisGame />} /> 
          
          {PracticeAdvancedConceptsRoutes}
          {AuthRoute}
          {ProductRoutes}


          <Route path="/" children={<Home />} />
      
        </Switch>
      
     </Router>
    </Provider>
  );
}
}


function Rgb(){
  return <a href="https://tap.ibhubs.in/2019/rahul-kandikatla/js-assignments/rgb-app/rgb-app.html">RGB</a>;
}
export default App;
