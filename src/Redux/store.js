import { applyMiddleware, combineReducers, createStore } from "redux";

//import {configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

import HomeReducer from '../Redux/ReducerFiles/HomeReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers(
    {
       home : HomeReducer
    })

const middlewares = [thunk]; 

export const store = createStore(rootReducer , composeWithDevTools( applyMiddleware(...middlewares) ));