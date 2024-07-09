import React from 'react'
import { Link } from 'react-router-dom'
import {Button,Stack,Typography} from '@mui/material'
const ExerciseCard = ({exercise}) => {
  return (
        <Link className='exercise-card outline outline-gray-300 flex flex-col justify-center items-center shadow-xl  p-2' to={`/exercise/${exercise.id}`} onClick={()=>{window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });}} >
          <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='size-56 m-3 mb-4 rounded-xl shadow-2xl outline outline-blue-400'/>
          <Stack direction='row'>
            <Button sx={{color:'#26355D',background:'#FFDB00',
               fontSize : '14px',borderRadius:'10px', textTransform:'capitalize',
               ':hover':{
                outline:2
               }            
            }}>
            {exercise.bodyPart}
            </Button>
            <Button sx={{ml:'21px',color:'#26355D',background:'#FFDB00',
               fontSize : '14px',borderRadius:'10px', textTransform:'capitalize',
               ':hover':{
                outline:2
               }
            }}>
            {exercise.target}
            </Button>
          </Stack>
          <Typography color='#9BEC00' mt='10px' textTransform='capitalize' fontSize='15px' sx={{backgroundColor:'black', width:'240px', p:1,pl:4, borderRadius:1, ':hover':{
                outline:2,
                backgroundColor:'#fff',
                color:'black'
               }}}> 
            {exercise.name.length>25 ? exercise.name.slice(0,25) + '...' : exercise.name}
          </Typography>
           
        </Link>
        
  )
}

export default ExerciseCard