import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: ""
}

export const searchQuerySlice = createSlice({
    name: 'searchQuery',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.query = action.payload
        },
        
    }
})

export const { setSearchQuery } = searchQuerySlice.actions


export default searchQuerySlice.reducer
