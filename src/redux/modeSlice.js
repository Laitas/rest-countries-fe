import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lightMode: true
}

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggleMode: state => {state.lightMode = !state.lightMode}
    }
});

export const {
    toggleMode
} = modeSlice.actions
export default modeSlice.reducer