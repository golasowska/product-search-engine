import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ShowProduct from './ShowProduct';

import Navigation from './Navigation';

class DisplayData extends React.Component{



showData=()=>{
  return _.map(this.props.data, product=>{
    console.log('product', product);
    return <ShowProduct key={product._id} product={product} />
  })
}


  render() {
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
    data: state.display
  }
}

export default connect(mapStateToProps, null) (DisplayData);
