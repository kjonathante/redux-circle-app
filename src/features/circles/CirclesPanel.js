import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { createCircle } from './circlesSlice'
import AddButton from '../../common/components/AddButton'
import Circles from './Circles'

const mapDispatchToProps = {
  createCircle,
}

const CirclesPanel = (props) => {
  function createHanlder() {
    props.createCircle({ id: uuidv4() })
  }
  return (
    <div>
      <p>Circle Panel</p>
      <AddButton onClick={createHanlder} />
      <Circles />
    </div>
  )
}

export default connect(null, mapDispatchToProps)(CirclesPanel)
