import React, { useEffect,useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from "./HorizontalScrollBar"
import LoaderComp from './Loader'
import { useSelector } from 'react-redux'
import { selectTargetMuscleExercises } from '../features/exercises/targetMucleExercisesDataSlice'
import { selectEquipmentExercises } from '../features/exercises/equipmentExercisesSlice'
const SimilarExercises = ({}) => {
  const targetMuscleExercises = useSelector(selectTargetMuscleExercises)
  const equimentExercises = useSelector(selectEquipmentExercises)
  return (
    <Box sx={{
      mt:{lg:'100px', xs:'0'},
    }} >
      <Typography variant='h5' ml={3} mb={3} color="#00215E">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{p:'2px', position:'relative'}} alignItems={'center'} justifyContent={'center'} height={'400px'}>
        { targetMuscleExercises.length ? <HorizontalScrollBar exercises={targetMuscleExercises}/> : <LoaderComp/>}
      </Stack>
      <Typography variant='h5' ml={3} mb={3} mt={10} color="#00215E">
        Exercises that use the same equipment
      </Typography>
      <Stack direction='row' sx={{p:'2px', position:'relative'}} alignItems={'center'} justifyContent={'center'} height={'400px'}>
        { equimentExercises.length ? <HorizontalScrollBar exercises={equimentExercises}/> : <LoaderComp/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises