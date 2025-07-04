import { createSlice } from "@reduxjs/toolkit";

const ApiSlice = createSlice({
    name: 'apidata',
    initialState: [],
    reducers: {
        addApiData: (state, action) =>(action.payload)
    }
})

export const { addApiData } = ApiSlice.actions;
export default ApiSlice.reducer;