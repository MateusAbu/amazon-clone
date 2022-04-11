import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header/Header'
import Home from './Home/Home'
import Checkout from './Checkout/Checkout'
import Login from './Login/Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function App() {

  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ', authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (

    <Router>
      <div className="app">

        <Routes>
          <Route path='/login' element={[
            <Login />
          ]} />

          <Route path='/checkout' element={[
            <Header />,
            <Checkout />
          ]} />

          <Route path='/' element={[
            <Header />,
            <Home />
          ]} />
        </Routes>

      </div>
    </Router>
  )
}

export default App;
