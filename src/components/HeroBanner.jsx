import React from 'react'
import {Box, Stack, Typography,Button } from '@mui/material'
import HeroBannerImg from "../assets/images/fitness2.png"
const HeroBanner = () => {
  const handleClick = () =>{
    window.scrollTo({ top: 810, behavior: 'smooth' });
  }
  return (
    <div className='flex flex-row items-center justify-center bg-black h-fit'>
      <div className='flex flex-col items-center justify-center'>
      <Typography color={"white"} fontWeight={600} fontSize={"26px"} >Fitness Club</Typography>
      <Typography mb="3px" mt="3px" color={'white'}> 
        Sweat,Smile and Repeat
      </Typography> 
      <Button variant='outlined' color='error' onClick={handleClick} sx={{color:'red', fontSize:20, my:2}} >Explore Exercises</Button>
      </div>
      <img src='bodyBuilder.png' alt='bodyBuilder' className='mt-32 img-size'/>
    </div>
  )
}

export default HeroBanner


{/* <Box sx={{
      mt:{lg:'60px',xs:'60px'},
      ml:{sm:'50px'},
      pt:{lg:'80px', sm:'30px'},
      backgroundColor:"black",
      boxShadow:10
      
    }} position={'relative'} p='20px' >
      <Typography > 
        Fitness Club
      </Typography>
      <Typography  fontWeight={700}
       sx={{fontSize:{lg:'40px', xs : '35px'}}}
       mb="23px" mt="30px" color={'white'} lineHeight="45px"> 
        Sweat,Smile and <br/>  Repeat
      </Typography> 
      <Typography  fontSize="20px"
      lineHeight="25px" mb={4} color={'white'}> 
        Check out the most effective <br/> exercises
      </Typography>
      <Button variant='contained' color='error' sx={{backgroundColor:'#ff2625', padding:"10px"}} onClick={()=>{window.scrollTo({ top: 700, left: 0, behavior: 'smooth' });}}>Explore Exercises</Button>
      
      <img src={HeroBannerImg} alt='banner' className=' absolute top-5  right-2 lg:right-80  h-100 w-96 invisible sm:visible '/>
    </Box> */}