import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    exercises : [],
}

export const exerciseSlice = createSlice({
   name:'exercises',
   initialState,
   reducers:{
    addExercises:(state,action)=>{
        const tempExercises = action.payload;
        state.exercises = tempExercises;
    
    }
   }
})

export const {addExercises} = exerciseSlice.actions;
export const selectExercises = (state) => state.exercises.exercises;

export default exerciseSlice.reducer