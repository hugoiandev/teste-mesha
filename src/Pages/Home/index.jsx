import React from 'react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import styles from './_Home.module.scss'
import { GET_WEATHER } from '../../Api/weather'
import KelvinToCelsius from '../../Utils/convertTemp'
import { setTerm, GET_MUSIC } from '../../Api/shazam'
import { ReactComponent as QuitIcon } from '../../Assets/icon/quit.svg'
import { ReactComponent as Loading } from '../../Assets/icon/loading.svg'

const Home = () => {
  const [change, setChange] = React.useState(false)
  const [city, setCity] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [loadingModal, setLoadingModal] = React.useState(false)
  const [local, setLocal] = React.useState('')
  const [temp, setTemp] = React.useState(0)
  const [musicList, setMusicList] = React.useState(null)
  const [modal, setModal] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [statusBtn, setStatusBtn] = React.useState(false)

  const handleSubmit = async () => {
    setChange(!change)
    setStatusBtn(false)
    setError(null)
    setModal(false)
    setLoading(true)
    try {
      const {url} = GET_WEATHER(city)
      const response = await fetch(url)
      const {main, name} = await response.json()
      setLocal(name)
      setTemp(KelvinToCelsius(main.temp))
    } catch(err) {
      setError('Ocorreu um erro! Tente novamente.')
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    if (temp !== 0) {
      const fetchMusic = async () => {
        setLoadingModal(true)
        try {
          const {url, options} = GET_MUSIC(setTerm(temp))
          const response = await fetch(url, options)
          const json = await response.json()
          setMusicList(json)
          setModal(true)
        } catch(err) {
          console.log(err)
        } finally {
          setLoadingModal(false)
        }
      }
      fetchMusic()
    }
  }, [change, temp])

  const handleSave = () => {
    const date = new Date()
    window.localStorage.setItem(`${local}`, JSON.stringify({
      city: local,
      date: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
      list: musicList.tracks.hits.map((item) => item.track.title),
      temp: temp,
      category: setTerm(temp)
    }))
    setStatusBtn(true)
  }

  return (
    <>
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
      </section>
      {loadingModal && <div className={styles.loading}><Loading /></div>}
      {error}
      {modal && <div className={styles.containerModal}>
        <div className={styles.modal}>
          <button
            className={styles.btnQuit}
            onClick={() => setModal(false)}
            >
          <QuitIcon />
          </button>
          <h2>Você pesquisou por: {local}</h2>
          <div className={styles.graus}>
            <span>
              Graus: {temp}℃
            </span>
          </div>
          <div className={styles.lista}>
              <h2>Lista de musicas conforme a temperatura: {setTerm(temp)}</h2>
              <ul>
                {musicList.tracks.hits.map((item, index) => {
                  return (
                    <li key={index}>{item.track.title}</li>
                  )
                })}
              </ul>
          </div>
          <div className={styles.save}>
            <span>Deseja salvar esta lista ?</span>
            {statusBtn ? <button disabled>
              Salvo
              </button> :
              <button onClick={handleSave}>
                Salvar
              </button>
            }
          </div>
        </div>
      </div>}
    </>
  )
}

export default Home
