import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducers/counterSlice.js';

export default configureStore({
    reducer: counterSlice
})
