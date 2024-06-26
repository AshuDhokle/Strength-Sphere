import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    targetMuscleExercises : [],
}

export const targetMuscleExercisesSlice = createSlice({
    name:'targetMuscleExercises',
    initialState,
    reducers:{
        addTargetMuscleExercises:(state,action)=>{
            const temp = action.payload
            state.targetMuscleExercises = temp;
            
        }
    }
})

export const {addTargetMuscleExercises} = targetMuscleExercisesSlice.actions;
export const selectTargetMuscleExercises = (state) => state.targetMuscleExercises.targetMuscleExercises
export default targetMuscleExercisesSlice.reducer
