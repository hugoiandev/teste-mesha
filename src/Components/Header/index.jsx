import React from 'react'
import styles from './_Header.module.scss'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const {pathname} = useLocation()

  return (
    <header className={styles.header}>
      <h1>Musicas Recomendadas</h1>
      <nav>
        {pathname === '/lista' ? <Link to='/'>Voltar</Link> : null}
        <Link to='/lista'>Ver lista</Link>
      </nav>
    </header>
  )
}

export default Header
