import React from 'react'
function SplashCounter(props) {
  return (
    <>
    <div className="counter-article-splash"></div>
      <article className="counter-article-splash">
        <span className="splash-counter-days">
          {props.days}
          <span>días</span>
        </span>
        <span className="splash-counter">
        {props.hours}
          <span>h</span>
        </span>
        <span className="splash-counter">
        {props.minutes}
          <span>m</span>
        </span>
        <span className="splash-counter">
        {props.seconds}
          <span>s</span>
        </span>
      </article>
      </>
  )
}
export default SplashCounter;