import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import './assets/css/reset.css'
import './assets/css/global.css'
import './assets/css/variables.css'
import './pages/Travel/Travel.css'

import Home from './pages/home/Home'
import Book from './pages/book/book'
import Heyzine from './pages/book/Heyzine'
import Travel from './pages/Travel/Travel'



function App() {
  return (
    <Routes>
      <Route index element= {<Home/>}/>
      <Route path="/book/" element={<Heyzine/>} />
      <Route path="/Travel/" element={<Travel/>} />
      
    </Routes>
  
  )
}

export default App
