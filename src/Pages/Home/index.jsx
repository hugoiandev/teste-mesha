import React from 'react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import styles from './_Home.module.scss'

const Home = () => {
  const [city, setCity] = React.useState('')

  const handleSubmit = () => {
    console.log(city)
  }

  return (
    <section className={styles.home}>
      <form>
        <Input
          placeholder='Digite uma cidade'
          onChange={(event) => setCity(event.target.value)}
        />
        <Button
          onClick={(event) => {
            event.preventDefault()
            handleSubmit()
          }}>
            Pesquisar
        </Button>
      </form>
    </section>
  )
}

export default Home
