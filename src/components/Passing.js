import React from 'react';

export default function Passing({data}) {
  function convertTime(time) {
    let newHour = null;
    let timeArr = time.split(':');
    let hour = timeArr[0];
    if (Number(hour) < 12) { 
      newHour = Number(hour) % 12 + ':' + timeArr[1] + 'a.m.';
    } 
    else if (Number(hour) === 12){
      newHour = time + 'p.m.'; 
    } else {
      newHour = Number(hour) % 12 + ':' + timeArr[1] + 'p.m.';
    }
    return newHour;
  }

  function splitDigits(num) {
    num=Math.ceil(num);
    let newNum = '';
    while (num > 1000){
      let remain = num % 1000;
      num = Math.floor(num / 1000);
      newNum = remain + ',' + newNum;
    }
    return num + ',' + newNum.slice(0,newNum.length-1);
  }

  return data.map((astro, i) => (
      <p key={i}>
        Misses {astro['orbiting_body']} tomorrow at {convertTime(astro['close_approach_date_full'].split(' ')[1])} {' '}
        by <br/> {splitDigits(astro['miss_distance']['kilometers'])} kilometers whilst travelling at <br/>{splitDigits(astro['relative_velocity']['kilometers_per_hour'])}kph
      </p>
      
  ));

}
