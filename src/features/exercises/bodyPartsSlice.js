import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    bodyParts : [],
}

export const bodyPartsSlice = createSlice({
    name:'bodyPart',
    initialState,
    reducers:{
        addBodyParts:(state,action)=>{
            const tempBodyParts = action.payload
            state.bodyParts = tempBodyParts;
        }
        
    }
})

export const {addBodyParts} = bodyPartsSlice.actions;
export const selectBodyParts = (state) => state.bodyParts.bodyParts
export default bodyPartsSlice.reducer
