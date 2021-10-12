const API_KEY = 'c3083241c1c8d585022a63795c5c94fa'

export const GET_WEATHER = (city) => {
  return {
    url: `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  }
}