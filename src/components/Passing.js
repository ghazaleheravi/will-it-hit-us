import React from 'react';

export default function Passing({data}) {
  return data.map((astro, i) => (
      <p key={i}>
        Misses {astro['orbiting_body']} tomorrow at {astro['close_approach_date_full'].split(' ')[1]} {' '}
        by {astro['miss_distance']['kilometers']} kilometers {' '}
        <br/>whilst travelling at {astro['relative_velocity']['kilometers_per_hour']} kph
      </p>
      
  ));

}


