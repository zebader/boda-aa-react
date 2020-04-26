import React, { useEffect, useState } from 'react'
import utils from '../../utils/utils'
import NavCounter from './NavCounter'
import SplashCounter from './SplashCounter'

function Counter(props) {
  const [seconds, setSeconds] =  useState(utils.getTimeLeft().secondsLeft());
  const [minutes, setMinutes] =  useState(utils.getTimeLeft().minutesLeft());
  const [hours, setHours] =  useState(utils.getTimeLeft().hoursLeft());
  const [days, setDays] =  useState(utils.getTimeLeft().daysLeft);

  useEffect(() => {
    setTimeout(() => {
      if (seconds === 0 && minutes === 0 && hours === 0) {
        setHours(hours + 24);
        setDays(days - 1);
      } else if (seconds === 0 && minutes === 0) {
        setMinutes(minutes + 59);
        setHours(hours - 1);
      } else if (seconds === 0) {
        setSeconds(seconds + 59);
        setMinutes(minutes - 1);
      } else {
        setSeconds( seconds - 1);
      }
    }, 1000);
  } , [seconds, minutes, hours, days]); 

  return (
    <section>
      {props.counterType === "navCounter" && 
      <NavCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}/>
      }
      {props.counterType === "splashCounter" && 
      <SplashCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}/>
      }
    </section>
  )
}
export default Counter;