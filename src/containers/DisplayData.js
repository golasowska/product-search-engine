import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import * as Actions from '../actions';
import ShowProduct from './ShowProduct';


class DisplayData extends React.Component{


showData=()=>{
  const data = Object.assign({}, this.props.data.data);
  console.log('data', data.hits);
  return _.map(data.hits, product=>{
    return <ShowProduct key ={product._id} product={product} />
  })

}

handlePageClick=(data)=>{
  const values = {title: this.props.data.name};
  let from = data.selected;
  this.props.performQuery(values, from)
}


  render() {
    const data = Object.assign({}, this.props.data.data);
    console.log('dataData', data.hits);
    const totalHits = data.total;
    console.log('data total', data.total);
    const pageCount = Math.ceil(totalHits/5)
    return <div>
      {this.showData()}
      <div>
      <ReactPaginate previousLabel='<'
                     nextLabel='>'
                     breakLabel={<a href="">...</a>}
                     breakClassName={"break-me"}
                     marginPagesDisplayed={2}
                     pageRangeDisplayed={5}
                     onPageChange={this.handlePageClick}
                     containerClassName={"pagination"}
                     subContainerClassName={"pages pagination"}
                     activeClassName={"active"}
                     pageCount={pageCount} />
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    data: state.display
  }
}

export default connect(mapStateToProps, Actions) (DisplayData);
