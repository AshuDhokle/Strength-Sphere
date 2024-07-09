import React from 'react'
import {Link} from "react-router-dom"
import {Stack} from "@mui/material"
import Logo from '../assets/images/logo.png'
const Navbar = () => {
  const handleClick = () =>{
    window.scrollTo({ top: 810, behavior: 'smooth' })
  }
  return (
    <Stack direction={"row"} justifyContent={"start"} alignItems={'flex-start'} sx={{boxShadow: 10 , gap:{
      sm:"122px", xs:"40px",backgroundColor:'black',
    }}} px={"20px"}>
      <Link to={'/'}>
        <img src={Logo} alt='logo' className='size-16 m-2'/>
      </Link>
      <Stack direction={'row'} gap={'40px'} fontSize={"16px"} alignItems={"flex-start"}>
        <Link to={'/'} className=' text-white mt-8 font-sans font-semibold'>Home</Link>
        <a href='#exercise' className='text-white mt-8 font-sans font-semibold' onClick={handleClick}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar