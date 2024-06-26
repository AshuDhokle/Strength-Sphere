import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Logo from "../assets/images/logo.png"
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt = "logo" width='200px' height='40px' className='size-8'/>
        <Typography variant='h6' color="#3C5B6F" pb='40px' mt='10px'>
           copyright @2024
        </Typography>
      </Stack>

    </Box>
  )
}

export default Footer