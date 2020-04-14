import React from 'react'
import { connect } from 'react-redux'
import Circle from './Circle'
// import styles from './Circles.module.scss'

const mapStateToProps = (state) => {
  return { circles: state.circles }
}

const Circles = (props) => {
  return (
    <div>
      {props.circles.ids.map((el) => (
        <Circle key={el} id={el} />
      ))}
    </div>
  )
}

export default connect(mapStateToProps)(Circles)
