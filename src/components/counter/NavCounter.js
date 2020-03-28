import React from 'react'
function NavCounter(props) {
  return (
      <article className="counter-article">
        <span className="nav-counter">
          {props.days}
          <span>d</span>
        </span>
        <span className="nav-counter">
        {props.hours}
          <span>h</span>
        </span>
        <span className="nav-counter">
        {props.minutes}
          <span>m</span>
        </span>
        <span className="nav-counter">
        {props.seconds}
          <span>s</span>
        </span>
      </article>
  )
}
export default NavCounter;