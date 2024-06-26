import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    exerciseVideos : [],
}

export const exerciseVideosSlice = createSlice(({
    name:'exerciseVideos',
    initialState,
    reducers:{
        addExerciseVideos:(state,action)=>{
            state.exerciseVideos = action.payload;
            
        }
    }
}))

export const {addExerciseVideos} = exerciseVideosSlice.actions;
export const selectExerciseVideos = (state) => state.exerciseVideos.exerciseVideos
export default exerciseVideosSlice.reducer
