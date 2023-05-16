import thunk from 'redux-thunk';
import { AnyAction, applyMiddleware } from 'redux';
import { configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { newsReducer } from './news/reducer';


const rootReducer = combineReducers({
  newsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  enhancers: [composeWithDevTools(applyMiddleware(thunk))],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export default store;