import React from 'react';

export default class ShowProduct extends React.Component{
  render() {
  const {name, price} = this.props.product._source
  return(
    <div>
        <ul className='list-group'>
          <li className='list-group-item'>{name}, ${price}</li>
        </ul>
      </div>
  )
  }
}
