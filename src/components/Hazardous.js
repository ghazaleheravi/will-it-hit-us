import React from 'react';
import PropTypes from 'prop-types';

function Hazardous({ isHazardous }) {
  
  return (
  <div>
    <p style={{color: 'orange'}}>
      Potentially hazardous?  {'  '}
      <span>{isHazardous === true ? <strong>YES 😱</strong> : <strong>Nope 👍</strong>}</span>
    </p>
  </div>
  );
}

Hazardous.propTypes = {
  isHazardous: PropTypes.bool
};

export default Hazardous;