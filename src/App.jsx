import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import CountryPage from './routes/CountryPage'
import Home from './routes/Home'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/country/:countryName' element={<CountryPage/>}>
          <Route path=':countryName'/>
        </Route>
      </Routes>
    </>
    
  )
}

export default App
