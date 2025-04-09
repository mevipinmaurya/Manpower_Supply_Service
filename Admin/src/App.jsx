import React from 'react'
import Admin from './Pages/Admin.jsx'
import Navbar from './Components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Admin />
    </BrowserRouter>
  )
}

export default App