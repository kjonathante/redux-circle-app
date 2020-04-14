import React from 'react'
import styles from './AddButton.module.scss'

const AddButton = (props) => {
  return (
    <div className={styles.button}>
      <p onClick={props.onClick}></p>
    </div>
  )
}

export default AddButton
