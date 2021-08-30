import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import modeSlice from './modeSlice';
import countrySlice from './countrySlice';
const reducers = combineReducers({
  mode: modeSlice,
  country: countrySlice,
});
const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig,reducers)
export const store = configureStore({
    reducer: persistedReducer
})
