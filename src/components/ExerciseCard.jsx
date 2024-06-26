import React from 'react'
import { Link } from 'react-router-dom'
import {Button,Stack,Typography} from '@mui/material'
const ExerciseCard = ({exercise}) => {
  return (
        <Link className='exercise-card flex flex-col justify-center items-center shadow-xl bg-slate-100 p-10' to={`/exercise/${exercise.id}`} onClick={()=>{window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });}} >
          <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='size-56 m-3 mb-4 rounded-xl shadow-2xl '/>
          <Stack direction='row'>
            <Button sx={{ml:'21px',color:'#fff',background:'#00215E',
               fontSize : '14px',borderRadius:'20px', textTransform:'capitalize'            
            }}>
            {exercise.bodyPart}
            </Button>
            <Button sx={{ml:'21px',color:'#fff',background:'#2C4E80',
               fontSize : '14px',borderRadius:'20px', textTransform:'capitalize'            
            }}>
            {exercise.target}
            </Button>
          </Stack>
          <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='15px'> 
            {exercise.name}
          </Typography>
           
        </Link>
        
  )
}

export default ExerciseCard