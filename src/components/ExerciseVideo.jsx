import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectExerciseVideos } from '../features/exercises/exerciseVideosDataSlice'
import { FaCirclePlay } from "react-icons/fa6";
import { GrChannel } from "react-icons/gr";

const ExerciseVideo = ({name}) => {
  const exerciseVideos = useSelector(selectExerciseVideos);
  return (
    <Box sx={{marginTop:{lg:'100px', xs:'20px'}}} mb="40px" p="20px">
       <Typography variant='h5' mb="30px" sx={{display:'flex', alignItems:'center', justifyContent:'center' , fontSize:{lg:'20px', xs:'18px'}}}>
       <FaCirclePlay className='mr-4 size-8 lg:size-16 text-red-600' /> Watch <span style={{color:'#ff2625', textTransform:'capitalize'}} className=' mx-2 '> {name} </span> exercise videos
       </Typography>
       <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
        sx={{
          flexDirection:{lg:'row'},
          gap:{lg:'110px', xs: '0'}
        }}
       >
        {exerciseVideos.contents?.slice(0,3).map((item,idx)=>(
          <a
           key={idx}
           className='exercise-video'
           href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
           target='_blank'
           rel='noreferrer' 
          > 
           <img src={item.video.thumbnails[0].url} alt={item.title} className='border-red-700 border-4'/>
          <Box mb="10px">
            <Typography variant='h6' lineHeight={1} color='#C40C0C' sx={{display:'flex', alignItems:'center', justifyItems:'center'}} >
            <FaCirclePlay className=' mx-2' /> {item.video.title.slice(0,25) + '.....'}
            </Typography>
            <Typography  variant='h8' fontStyle='oblique' fontFamily='sans-serif' ml={2} mt={1} sx={{display:'flex', alignItems:'center', justifyItems:'center'}}>
              <GrChannel className='mr-2 size-6 text-red-600'/> <span className='flex-wrap'>{item.video.channelName}</span>
            </Typography>
          </Box>
          </a>
        ))}
       </Stack> 
    </Box>
  )
}

export default ExerciseVideo