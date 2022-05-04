import React from 'react';
import Hazardous from './Hazardous';
import Passing from './Passing';
import PropTypes from 'prop-types';

function Section( {
  name,
  is_potentially_hazardous_asteroid,
  nasa_jpl_url,
  close_approach_data
  } )  {

  return (
    <div>
      <hr className='break'></hr>
      <h3 className="name">{name.slice(1,name.length-1)}</h3>
      <Hazardous isHazardous={is_potentially_hazardous_asteroid} />
      <Passing data={close_approach_data} />
      <p>
        <a className='link' href={nasa_jpl_url}> 
          Find out more
        </a>
      </p>
    </div>
  );
}

Section.propTypes = {
  name: PropTypes.string,
  is_potentially_hazardous_asteroid: PropTypes.bool,
  nasa_jpl_url: PropTypes.string,
  close_approach_data: PropTypes.array
};

export default Section;