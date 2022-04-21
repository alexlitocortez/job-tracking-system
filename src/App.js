import './App.css'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import CreateJob from './pages/CreateJob'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import CalendarPage from './pages/CalendarPage'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/createjob' element={<CreateJob />} />
          <Route path='/calendar' element={<CalendarPage />} />
        </Routes>
      </Router>
      <CalendarPage />
    </div>
  );
}

export default App;
