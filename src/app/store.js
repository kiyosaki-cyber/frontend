import { configureStore } from '@reduxjs/toolkit'
import setFoodReducer from '../features/Home/SetSlice'

 export const store = configureStore ({
    reducer: {
       counter : setFoodReducer 
    },
})
