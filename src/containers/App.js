import React  from 'react';
import { history } from '../store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import SearchBar from './SearchBar';
import DisplayData from './DisplayData';



class App extends React.Component {

  render() {
    return (
      <ConnectedRouter history={history}>
        <div className='container'>
          <Route exact path='/' component={SearchBar}  />
          <Route path='/results' component= {DisplayData} />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
