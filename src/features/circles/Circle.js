import React from 'react'
import { connect } from 'react-redux'
import { removeCircle } from './circlesSlice'

import styles from './Circle.module.scss'

const Circle = (props) => {
  function removeHandler() {
    props.removeCircle({ id: props.id })
  }
  return (
    <div className={styles.wrapper}>
      <span onClick={removeHandler} />

      <svg
        className={styles.circle}
        viewBox="0 0 100 100"
        width="100"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="arc"
            fill="none"
            stroke="black"
            d="M 25 50 a 25 25 0 1 1 50 0 a 25 25 0 1 1 -50 0"
          />
        </defs>
        <circle id="circle" cx="50" cy="50" r="50" fill="red" />
        <text fill="white">
          <textPath href="#arc">{props.id}</textPath>
        </text>
      </svg>
    </div>
  )
}

export default connect(null, { removeCircle })(Circle)
