const API_KEY = '9e09f9c8femsh808737633d26524p11fb18jsnca92a3fde5e6'

export const setTerm = (temp) => {
  if (temp > 32) {
    return 'Rock'
  } else if (temp < 32 && temp > 24) {
    return 'Pop'
  } else if (temp < 24 && temp > 16) {
    return 'Classica'
  } else {
    return 'Lofi'
  }
}

export const GET_MUSIC = (term) => {
  return {
    url: `https://shazam.p.rapidapi.com/search?term=${term}&locale=en-US&offset=0&limit=10`,
    options: {
      method: 'GET',
      headers: {
        "x-rapidapi-host": "shazam.p.rapidapi.com",
        "x-rapidapi-key": `${API_KEY}`
      }
    }
  }
}