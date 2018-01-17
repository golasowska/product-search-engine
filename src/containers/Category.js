import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import * as Actions from '../actions';


import Navigation from './Navigation';
import ShowProduct from './ShowProduct';

class Category extends React.Component {
  constructor(props){
    super(props);
    this.state={
      render: false
    }
  }

  componentDidMount=() =>{
    const value = this.props.category;
    const selected_page = 0;
    this.props.fetchCategory(value, selected_page);
  }

  handlePageClick=(data)=>{
    const value = this.props.category;
    let selected_page = data.selected;
    if (this.state.render) {
    this.props.sortByPrice(value, selected_page)
  } else{
    this.props.fetchCategory(value, selected_page)
  }
    this.props.history.push(`/${this.props.category}/page=${data.selected+1 }`)
  }


  priceSortDesc=()=>{
    this.setState({
      render: true
    });
    const value = this.props.category;
    let selected_page = 0;
    this.props.sortByPrice(value, selected_page);
    this.props.history.push(`/${this.props.category}/page=${selected_page+1 }`)
  }

  priceSortAsc=()=>{
    this.setState({
      render: false
    });
    const value = this.props.category;
    const selected_page = 0;
    this.props.fetchCategory(value, selected_page);
    this.props.history.push(`/${this.props.category}/page=${selected_page+1 }`)
  }

  showData=()=> {
    return _.map(this.props.data.hits, product=>{
      return <ShowProduct key ={product._id} product={product} />
    })
  }

  render(){
    // console.log('this props history', this.props.history);
    const totalHits = this.props.data.total;
    const pageCount = Math.ceil(totalHits/5)
    return <div>
    <div>
      <Navigation />
    </div>
    <div>
      <button className='btn btn-primary' onClick={this.priceSortDesc}>price: highest first</button>
      <button className='btn btn-primary' onClick={this.priceSortAsc}>price: lowest first</button>
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

export default connect(mapStateToProps, Actions) (Category);
