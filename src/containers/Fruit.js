import React from 'react';

import Category from './Category';


export default class Fruit extends React.Component {

  render(){
    return <div>
      <Category category='fruit'
      history={this.props.history}/>
    </div>
  }
}
