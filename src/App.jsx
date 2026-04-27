import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CountryList from './pages/CountryList'
import CountryDetails from './pages/CountryDetails'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<CountryList/>} />
      <Route path='/country/:name' element={<CountryDetails/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
