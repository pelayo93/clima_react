import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';


function Error({mensaje}) {
  return (
   <div className="alert alert-danger" role="alert">{mensaje}</div>
  )
}
Error.propTypes = {
  mensaje: PropTypes.string.isRequired
}
export default Error
