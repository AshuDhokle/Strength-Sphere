import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Logo from "../assets/images/logo.png"
const Footer = () => {
  return (
    <Box mt="40px" bgcolor="#000">
      <Stack gap='10px' alignItems='center' pt='20px'>
        <img src={Logo} alt = "logo" width='200px' height='40px' className='size-16'/>
        <Typography variant='h6' color="#9BEC00" pb='20px' mt='10px'>
           copyright @2024
        </Typography>
      </Stack>

    </Box>
  )
}

export default Footer