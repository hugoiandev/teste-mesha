import React from 'react'
import styles from './_Input.module.scss'

const Input = ({placeholder, onChange}) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
