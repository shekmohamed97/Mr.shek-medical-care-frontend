import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

export const Context=createContext({
  isAthendicated:false,
})
const AppWrapper=()=>{
  const [isAthendicated,setIsAthendicated]=useState(false);
  const [user,setUser]=useState({});
   return(
    <Context.Provider value={{
      isAthendicated,
      setIsAthendicated,
      user,
      setUser
    }}>
        <App />
    </Context.Provider>
   )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      
      <AppWrapper/>
      </React.StrictMode>,
)
