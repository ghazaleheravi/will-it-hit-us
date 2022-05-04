import React from 'react';
import PropTypes from 'prop-types';

function Hazardous({ isHazardous }) {
  
  return (
  <div>
    <p className="hazard">
      Potentially hazardous?
      <span className="isHazard">
        {isHazardous === true ? 'YES 😱' : 'Nope 👍'}
      </span>
    </p>
  </div>
  );
}

Hazardous.propTypes = {
  isHazardous: PropTypes.bool
};

export default Hazardous;