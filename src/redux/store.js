import {ConfigureStore} from '@reduxjs/toolkit';
import modeSlice from './modeSlice';
export const store = ConfigureStore({
    reducers:{
        mode: modeSlice
    }
})
