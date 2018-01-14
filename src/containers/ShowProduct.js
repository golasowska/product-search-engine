import React from 'react';

export default class ShowProduct extends React.Component{
  render() {
  console.log('produkciki',this.props.product);
  const {name, price} = this.props.product._source
  return(
    <ul>
      <li>{name}, ${price}</li>
    </ul>
  )
  }
}
