import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import * as Actions from '../actions';

import Navigation from './Navigation';
import ShowProduct from './ShowProduct';

class Meat extends React.Component{

  componentDidMount=()=>{
    const value = 'meat';
    const selected_page = 0;
    this.props.fetchCategory(value, selected_page);
  }

  handlePageClick=(data)=>{
    const value = 'meat';
    let selected_page = data.selected;
    this.props.fetchCategory(value, selected_page)
  }

  showData=()=> {
    return _.map(this.props.data.hits, product => {
      return <ShowProduct key={product._id} product={product} />
    })
  }

  render(){
    const totalHits = this.props.data.total;
    const pageCount = Math.ceil(totalHits/5)
    return <div>
      <div>
        <Navigation />
      </div>
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
    data: state.displayCategory
  }
}

export default connect (mapStateToProps, Actions ) (Meat);
