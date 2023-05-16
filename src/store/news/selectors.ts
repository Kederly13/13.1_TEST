import { Istore } from './types';

export const selectList = (state: {newsReducer: Istore} ) : Istore['list'] => state.newsReducer.list;
export const selectError = (state: {newsReducer: Istore} ) : Istore['error'] => state.newsReducer.error;