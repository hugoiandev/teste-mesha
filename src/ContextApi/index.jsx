import React from "react";

export const Context = React.createContext()

const GlobalContext = ({children}) => {

  return (
    <Context.Provider value={{
      
    }}>
      {children}
    </Context.Provider>
  )
}

export default GlobalContext