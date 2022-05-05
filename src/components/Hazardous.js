import React from 'react';
import PropTypes from 'prop-types';

function Hazardous({ isHazardous }) {
  return (
    <p className="hazard">
      Potentially hazardous?
      <span className={isHazardous ? 'isHazard' : 'noHazard'}>
        {isHazardous === true ? 'YES 😱' : 'Nope 👍'}
      </span>
    </p>
  );
}

Hazardous.propTypes = {
  isHazardous: PropTypes.bool
};

export default Hazardous;