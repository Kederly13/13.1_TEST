import { Istore } from './types';

export const selectList = (state: {newsReducer: Istore} ) : Istore['list'] => state.newsReducer.list;