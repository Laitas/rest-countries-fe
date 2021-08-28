import {configureStore} from '@reduxjs/toolkit';
import modeSlice from './modeSlice';
import countrySlice from './countrySlice';
export const store = configureStore({
    reducer:{
        mode: modeSlice,
        country: countrySlice,
    }
})
