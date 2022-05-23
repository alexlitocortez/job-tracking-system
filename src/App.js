import './App.css'
import React, { useState, useContext, useEffect } from 'react'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import FreeTrial from './pages/FreeTrial'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import CalendarPage from './pages/CalendarPage'
import LogoutButton from './components/LogoutButton.js/LogoutButton'
import { InputFieldProvider } from './components/ContextAPIs/InputFieldContext'

function App() {

  const [dataGet, setDataGet] = useState({})

  const loginInfo = {
    Username: '',
    Password: ''
  }

  useEffect(() => {
    fetch('/')
    .then(res => res.json())
    .then(dataGet => setDataGet(dataGet))
  }, [])

  useEffect(() => {
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(loginInfo)
    })
    .then(res => res.json())
    .then(dataGet => setDataGet(dataGet))
  }, [])

  return (
    <InputFieldProvider>
      <div className="App">
          <Router>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='/freetrial' element={<FreeTrial />} />
              <Route path='/calendar' element={<CalendarPage />} />
            </Routes>
          </Router>
      </div>
    </InputFieldProvider>
  );
}

export default App;
