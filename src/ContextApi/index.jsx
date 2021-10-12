import React from "react";

export const Context = React.createContext()

const GlobalContext = ({children}) => {
  const [musicList, setMusicList] = React.useState({})

  return (
    <Context.Provider value={{
      musicList,
      setMusicList
    }}>
      {children}
    </Context.Provider>
  )
}

export default GlobalContext