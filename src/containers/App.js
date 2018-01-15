import React  from 'react';
import { history } from '../store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import SearchBar from './SearchBar';
import DisplayData from './DisplayData';
import Fruit from './Fruit';
import Vegetable from './Vegetable';
import Meat from './Meat';
import Alcohol from './Alcohol';



class App extends React.Component {

  render() {
    return (
      <ConnectedRouter history={history}>
        <div className='container'>
          <Route exact path='/' component={SearchBar}  />
          <Route path='/results' component= {DisplayData} />
          <Route path='/fruit' component= {Fruit} />
          <Route path='/vegetable' component = {Vegetable} />
          <Route path='/meat' component = {Meat} />
          <Route path='/alcohol' component = {Alcohol} />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
