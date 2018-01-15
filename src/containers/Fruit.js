import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as Actions from '../actions';


import Navigation from './Navigation';
import ShowProduct from './ShowProduct';

class Fruit extends React.Component {

  componentDidMount=() =>{
    const value = 'fruit';
    console.log('fruit', value);
    this.props.fetchCategory(value);
  }

  showData=()=> {
    return _.map(this.props.data, product=>{
      return <ShowProduct key ={product._id} product={product} />
    })
  }


  render(){
    return <div>
    <div>
      <Navigation />
    </div>
      {this.showData()}
    </div>
  }
}

function mapStateToProps(state) {
  return {
    data: state.displayCategory
  }
}

export default connect(mapStateToProps, Actions) (Fruit);
