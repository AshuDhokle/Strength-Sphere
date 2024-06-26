import React from 'react'
import {Link} from "react-router-dom"
import {Stack} from "@mui/material"
import Logo from '../assets/images/logo.png'
const Navbar = () => {
  return (
    <Stack direction={"row"} justifyContent={"start"} alignItems={'flex-start'} sx={{boxShadow: 10 , gap:{
      sm:"122px", xs:"40px",backgroundColor:'#C40C0C',
    },
     mt:{sm:'32px', xs:"20px"}}} px={"20px"}>
      <Link to={'/'}>
        <img src={Logo} alt='logo' className='size-16 m-2'/>
      </Link>
      <Stack direction={'row'} gap={'40px'} fontSize={"16px"} alignItems={"flex-start"}>
        <Link to={'/'} className=' text-white mt-8 font-sans font-semibold'>Home</Link>
        <a href='#exercises' className='text-white mt-8 font-sans font-semibold'>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar