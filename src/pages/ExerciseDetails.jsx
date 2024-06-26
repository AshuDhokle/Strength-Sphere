import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { options,fetchData,youtubeSearchoptions } from '../utils/fetchData'
import Details from '../components/Details'
import ExerciseVideo from '../components/ExerciseVideo'
import SimilarExercises from '../components/SimilarExercises'
import { useDispatch } from 'react-redux'
import { addEquipmentExercises } from '../features/exercises/equipmentExercisesSlice'
import { addExerciseDetails } from '../features/exercises/exerciseDetailDataSlice'
import { addExerciseVideos } from '../features/exercises/exerciseVideosDataSlice'
import { addTargetMuscleExercises } from '../features/exercises/targetMucleExercisesDataSlice'
const ExerciseDetails = () => {
  const dispatch = useDispatch();
  const [exerciseDetails,setExerciseDetails] = useState({});
  const {id} = useParams();
  
  useEffect(()=>{
    const fetchExercisesData = async()=>{
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchURL = 'https://youtube-search-and-download.p.rapidapi.com'
      
      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`,options);
       setExerciseDetails(exerciseDetailData);
      dispatch(addExerciseDetails(exerciseDetailData));
      
      const exerciseVideosData = await fetchData(`${youtubeSearchURL}/search?query=${exerciseDetailData.name}`,youtubeSearchoptions);
      dispatch(addExerciseVideos(exerciseVideosData));
      
      const targetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`,options);
      dispatch(addTargetMuscleExercises(targetMuscleExercisesData));

      const equimentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`,options);
      dispatch(addEquipmentExercises(equimentExercisesData))
    }
    fetchExercisesData();
  },[id]);

  return (    
    <Box>
      <Details />
      <ExerciseVideo name={exerciseDetails.name}/>
      <SimilarExercises />
    </Box> 
  )
}

export default ExerciseDetails