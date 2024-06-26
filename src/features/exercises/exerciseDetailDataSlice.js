import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    exerciseDetails : {},
}

export const exerciseDetailSlice = createSlice({
    name:'exerciseDetails',
    initialState,
    reducers:{
        addExerciseDetails:(state,action)=>{
            state.exerciseDetails = action.payload;
        }
    }
})

export const {addExerciseDetails} = exerciseDetailSlice.actions
export const selectExerciseDetails = (state) => state.exerciseDetails.exerciseDetails

export default exerciseDetailSlice.reducer;