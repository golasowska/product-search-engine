import React from 'react';

import Category from './Category';


export default class Alcohol extends React.Component {

  render(){
    return <div>
      <Category category='alcohol'
      history={this.props.history}/>
    </div>
  }
}
