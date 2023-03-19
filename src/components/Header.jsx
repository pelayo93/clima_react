import React from 'react';
import PropTypes from 'prop-types';

function Header({titulo}) {
  return (
    <nav className="navbar bg-body-tertiary text-center">
    <div className="container-fluid ">
      <span className="navbar-text mx-auto">
       <h1>{titulo}</h1> 
      </span>
    </div>
  </nav>
  )
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}
export default Header

