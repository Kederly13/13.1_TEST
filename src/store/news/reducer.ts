import { AnyAction } from 'redux';
import { Istore } from './types';

const initialState = {
    list: [],
    error: null,
};

const newsReducer = (state: Istore = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'news/setNews':
            return {...state, list: action.payload}
        case 'news/setErrorNews':
            return {...state, error: action.payload}
        default:
            return state;
    }
};

export { newsReducer };