import React from 'react';

import Category from './Category';


export default class Vegetable extends React.Component {

  render(){
    return <div>
      <Category category='vegetable'
      history={this.props.history}/>
    </div>
  }
}
