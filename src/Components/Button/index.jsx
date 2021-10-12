import React from 'react'
import styles from './_Button.module.scss'

const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
