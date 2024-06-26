import { configureStore } from '@reduxjs/toolkit';
import bodyPartsReducer from '../features/exercises/bodyPartsSlice'; // Import the reducer, not the slice
import exerciseReducer from '../features/exercises/exerciseSlice'; // Import the reducer, not the slice
import equipmentExercisesReducer from '../features/exercises/equipmentExercisesSlice';
import targetMuscleExercisesReducer from '../features/exercises/targetMucleExercisesDataSlice';
import exerciseVideosDataReducer from '../features/exercises/exerciseVideosDataSlice';
import exerciseDetailDataReducer from '../features/exercises/exerciseDetailDataSlice';
const store = configureStore({
  reducer: {
    bodyParts: bodyPartsReducer, // Provide the reducer function, not the slice
    exercises: exerciseReducer, // Provide the reducer function, not the slice
    equipmentExercises: equipmentExercisesReducer,
    targetMuscleExercises: targetMuscleExercisesReducer,
    exerciseVideos: exerciseVideosDataReducer,
    exerciseDetails: exerciseDetailDataReducer,
  },
});

export default store;
