import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as Actions  from '../actions';
import DisplayData from './DisplayData';

import Navigation from './Navigation';

class SearchBar extends React.Component {
  constructor(props ){
    super(props);
    this.state={
      render: false
    }
  }

handleFormSubmit = (values) => {
  const from = 0;
  this.props.performQuery(values,from);
  this.setState({
    render: true
  })
}

renderTextField = ({ input, label, type}) => (
  <fieldset className='form-group'>
    <label className='label-control'>{label}</label>
      <div>
        <input {...input} placeholder={label} className='form-control' type={type} />
      </div>
    </fieldset>
);

    render() {
        return (
          <div>
          <Navigation />
            <div className='container'>
              <div className='col-md-6 col-md-offset-3'>
                <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)} >
                  <Field name='title' type='text' component={this.renderTextField} label='Product name' />
                  <button type='submit' className='btn btn-primary'>Search</button>
                </form>
              </div>
            </div>
            <div>
              {this.state.render ? (<Redirect to={{pathname:'/products/page=1'}}/>):null}
              {this.state.render? (<DisplayData />):null}
            </div>
          </div>
        )
    }
}

export default connect (null, Actions)(reduxForm({
  form: 'searchBar',
})(SearchBar));
