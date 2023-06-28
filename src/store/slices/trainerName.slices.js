import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlices = createSlice({
    name: 'trainerName',
    initialState: '',
    reducers: {
        setTrainerNameG: (state, action) => action.payload
    }
})

export const { setTrainerNameG } = trainerNameSlices.actions

export default trainerNameSlices.reducer