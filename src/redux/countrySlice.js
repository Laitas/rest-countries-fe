import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    alpha3Code: ''
}

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setCountry: (state,action) =>{
            state.alpha3Code = action.payload
        }
    }
});

export const {
    setCountry
} = countrySlice.actions
export default countrySlice.reducer