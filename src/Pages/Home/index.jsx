import React from 'react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import styles from './_Home.module.scss'
import { GET_WEATHER } from '../../Api/weather'
import KelvinToCelsius from '../../Utils/convertTemp'
import { setTerm, GET_MUSIC } from '../../Api/shazam'

const Home = () => {
  const [city, setCity] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [temp, setTemp] = React.useState(0)
  const [musicList, setMusicList] = React.useState(null)

  const handleSubmit = async () => {
    setLoading(true)
    const {url} = GET_WEATHER(city)
    const response = await fetch(url)
    const {main} = await response.json()
    setTemp(KelvinToCelsius(main.temp))
    setLoading(false)
  }

  React.useEffect(() => {
    if (temp !== 0) {
      const fetchMusic = async () => {
        const {url, options} = GET_MUSIC(setTerm(temp))
        const response = await fetch(url, options)
        const json = await response.json()
        setMusicList(json)
      }
      fetchMusic()
    }
  }, [temp])

  React.useEffect(() => {
    console.log(musicList)
  }, [musicList])

  return (
    <section className={styles.home}>
      <form>
        <Input
          placeholder='Digite uma cidade'
          onChange={(event) => setCity(event.target.value)}
        />
        {loading ? (<Button
          disabled>
            Pesquisando...
          </Button>) :
          (<Button
            onClick={(event) => {
              event.preventDefault()
              handleSubmit()
            }}>
            Pesquisar
        </Button>)}
      </form>
      <div className={styles.lista}>
        
      </div>
    </section>
  )
}

export default Home
