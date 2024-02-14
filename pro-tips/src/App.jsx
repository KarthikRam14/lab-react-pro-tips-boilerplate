import './App.css'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contacts'
import Register from './components/Register'

function App() {

  return (
    <>
      <Navbar/>
      <div className="body">
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/registration" element={<Register/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
