import React,{ useState } from 'react'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ExerciseDetails from './pages/ExerciseDetails'
import {Routes,Route} from 'react-router-dom'
import {Box} from "@mui/material"
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div>
      
      <Box width="400px" sx={{width:{xl:'1488'}}} m="auto">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exercise/:id' element={<ExerciseDetails/>}/>
        </Routes>
        <Footer/>  
      </Box>


    </div>
  )
}

export default App
