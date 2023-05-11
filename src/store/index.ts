import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';

import { newsReducer } from './news/reducer';




const rootReducer = combineReducers({
    newsReducer,
})

const store = configureStore({
    reducer: {  },
    enhancers: [composeWithDevTools(applyMiddleware(thunk))],
})

export { store };