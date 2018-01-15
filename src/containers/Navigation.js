import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
  render(){
    return(
    <nav className='navbar navbar-default mb-4'>
      <div className='container-fluid'>
      <div className='navbar-header'>
        <Link to='/' className='navbar-brand'>Home</Link>
      </div>

      <ul id='navig' className='nav navbar-nav navbar-right'>
        <li className='nav-item' key={1}>
          <Link className='nav-link' to='/fruit'>Fruits</Link>
        </li>
        <li className='nav-item' key={2}>
          <Link className='nav-link' to='/vegetable'>Vegetables</Link>
        </li>
        <li className='nav-item' key={3}>
          <Link className='nav-link' to='/alcohol'>Alcohol</Link>
        </li>
        <li className='nav-item' key={4}>
          <Link className='nav-link' to='/meat'>Meat</Link>
        </li>
      </ul>
      </div>
    </nav>
  )
  }
}
