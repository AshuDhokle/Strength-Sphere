import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    equipmentExercises : [],
}

export const equimentExercisesSlice = createSlice({
    name:'equipmentExercises',
    initialState,
    reducers:{
        addEquipmentExercises:(state,action)=>{
            state.equipmentExercises = action.payload;
            
        }
    }
})

export const {addEquipmentExercises} = equimentExercisesSlice.actions;
export const selectEquipmentExercises = (state) => state.equipmentExercises.equipmentExercises
export default equimentExercisesSlice.reducer
