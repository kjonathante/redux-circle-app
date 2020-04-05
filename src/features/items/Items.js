import React from 'react'
import Item from './Item'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return {
    items: state.items,
  }
}

const Items = (props) => {
  console.log(props)
  return (
    <div>
      {props.items.map((e) => (
        <Item key={e.id}>{e.attribute}</Item>
      ))}
    </div>
  )
}

export default connect(mapStateToProps)(Items)
