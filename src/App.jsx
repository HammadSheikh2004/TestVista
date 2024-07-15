import React from 'react'
import Navbar from './Components/Routing/Navbar'
import ContextApi from './Components/ContextApi/Context'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ContextApi />
      </BrowserRouter>
    </>
  )
}

export default App