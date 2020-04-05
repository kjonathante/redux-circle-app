import React from 'react'
import Item from './Item'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps', state, ownProps)
  return {
    items: state.items,
  }
}

const Items = (props) => {
  console.log('Items component', props)
  const { items } = props
  return (
    <div>
      {items.map((e) => (
        <Item key={e.id}>{e.attribute}</Item>
      ))}
    </div>
  )
}

export default connect(mapStateToProps)(Items)
