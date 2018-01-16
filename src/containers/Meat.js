import React from 'react';

import Category from './Category';


export default class Meat extends React.Component {

  render(){
    return <div>
      <Category category='meat'
      history={this.props.history}/>
    </div>
  }
}
