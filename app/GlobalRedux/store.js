'use client'
import { configureStore } from "@reduxjs/toolkit"
import dataReducer from './Features/data/dataSlice'
import projectReducer from './Features/data/prodjectSlice'
import thunk from 'redux-thunk'

const store = configureStore({
    reducer:{
        date:dataReducer,
        project:projectReducer,
    },
    middleware:[thunk]
})

export default store