import {AnyAction} from 'redux';
import { Istore } from './types';

const initialState = {
    list: [],
}

const newsReducer = (state: Istore = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'news/SetNews':
            return {...state, list: [...action.payload]}
        default: 
            return state;
    }
}

export { newsReducer };