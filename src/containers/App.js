import React  from 'react';
import SearchBar from './SearchBar';
import DisplayData from './DisplayData';
import { history } from '../store/configureStore';


class App extends React.Component {

  render() {
    return (
      <div>
        <SearchBar  />
        <DisplayData />
      </div>
    );
  }
}

export default App;
