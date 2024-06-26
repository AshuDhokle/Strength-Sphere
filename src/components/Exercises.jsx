import React,{useEffect,useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box,Typography,Stack} from '@mui/material'
import ExerciseCard from './ExerciseCard';
import {options,fetchData} from '../utils/fetchData';

const Exercises = ({exercises,setExercises,bodyPart}) => {
  //console.log(exercises);
  const [currentPage,setCurrentPage] = useState(1);
  const [exercisesPerPage,setExercisesPerPage] = useState(4);
  
  const paginate = (e,value) => {
      setCurrentPage(value);
      window.scrollTo({top:1800, behavior:'smooth'}) 
  }
  
  useEffect(()=>{
    const fetchExercisesData = async() =>{
      let exercisesData = [];
      console.log(bodyPart);
      if(bodyPart === "all"){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options);
      }else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options)
      }
      //console.log(exercisesData.body);
      setExercises(exercisesData);   
    }
    fetchExercisesData();
  },[bodyPart]);
  //console.log(exercises); 
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise);

  return (
    <Box id ='exercises'
         sx = {{mt:{lg:'110px'}}}
         mt = "50px"
         p = "20px"
    >
      <Typography variant='h3'  >
        
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}}
        flexWrap='wrap' justifyContent='center'
      >
        {
          exercises.length >= 1 ?
          currentExercises.map((exercise,idx)=>(
            <ExerciseCard key={idx} exercise={exercise} />
          ))
          : null
        }
      </Stack>
      <Stack mt="100px" alignItems="center">
        { exercises.length > 3 && (
          <Pagination
           color='standard'
           shape='rounded'
           defaultPage={1}
           count={Math.ceil(exercises.length/exercisesPerPage)}
           page={currentPage}
           onChange={paginate}
           size='large'
          /> 
        )}
        
      </Stack>
    </Box>
  )
}

export default Exercises