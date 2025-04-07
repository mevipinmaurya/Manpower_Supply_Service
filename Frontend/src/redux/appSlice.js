import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        value: 0
    },
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
    }
})

export const { setOpen } = appSlice.actions

export default appSlice.reducer