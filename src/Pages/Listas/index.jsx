import React from 'react'
import styles from './Lista.module.scss'
import { ReactComponent as TrashIcon } from '../../Assets/icon/lixeira.svg'

const Lista = () => {
  const [storageList, setStorageList] = React.useState([])

  const updateStorage = () => {
    const list = Object.keys(localStorage).map((key) => {
      return JSON.parse(localStorage.getItem(key))
    })
    setStorageList(list)
  }

  React.useEffect(() => {
    updateStorage()
  }, [])

  const handleTrash = (item) => {
    window.localStorage.removeItem(item)
    updateStorage()
  }

  return (
    <section className={styles.listWrapper}>
      <div style={{marginTop: '30px'}}>
        {storageList.map((item, index) => {
          return (
            <div className={styles.lista} key={index}>
              <div>
                <span>Busca feita em: {item.date}</span>
                <span>Cidade: {item.city}</span>
                <span>Temperatura: {item.temp}℃</span>
                <span>Temperatura: {item.category}</span>
                <span>Lista de musicas:</span>
                <ul>
                  {item.list && item.list.map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })}
                </ul>
              </div>
              <button
                onClick={(event) => {
                  event.preventDefault()
                  handleTrash(item.city)
                }}
                >
                <TrashIcon />
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Lista
